"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  baseVx: number
  baseVy: number
  radius: number
  baseRadius: number // Remember original size for pulsing
  color: string      // Added color
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    /* -------------------- Configuration -------------------- */
    const PARTICLE_COUNT = 200 // Lowered slightly for performance with lines
    const CONNECTION_DIST = 100 // Distance to snap lines
    const REPEL_RADIUS = 100
    const FORCE_STRENGTH = 0.5
    const FRICTION = 0.92
    
    // Cyberpunk/Tech Palette
    const COLORS = ["#ffffff", "#00ffff", "#ff00ff", "#8a2be2"] 

    /* -------------------- Resize -------------------- */
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    /* -------------------- Init Particles -------------------- */
    const particles: Particle[] = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = Math.random() * 2 + 1.5
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        baseVx: (Math.random() - 0.5) * 0.5,
        baseVy: (Math.random() - 0.5) * 0.5,
        radius: radius,
        baseRadius: radius,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }

    /* -------------------- Animation Loop -------------------- */
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 1. Update Physics & Draw Dots
      particles.forEach((p, i) => {
        // --- Mouse Physics ---
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < REPEL_RADIUS) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS
          const angle = Math.atan2(dy, dx)
          
          p.vx += Math.cos(angle) * force * FORCE_STRENGTH
          p.vy += Math.sin(angle) * force * FORCE_STRENGTH

          // Cool Feature: Grow when near mouse
          if (p.radius < p.baseRadius * 2.5) {
             p.radius += 0.2 
          }
        } else {
          // Shrink back to normal
          if (p.radius > p.baseRadius) {
             p.radius -= 0.1
          }
        }

        // --- Movement & Friction ---
        p.vx *= FRICTION
        p.vy *= FRICTION
        p.x += p.baseVx + p.vx
        p.y += p.baseVy + p.vy

        // --- Edge Wrapping ---
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // --- Draw Particle ---
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // --- Draw Connections (The "Cool" Part) ---
        // We compare this particle to every subsequent particle to avoid double-drawing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const distX = p.x - p2.x
          const distY = p.y - p2.y
          const distance = Math.sqrt(distX * distX + distY * distY)

          if (distance < CONNECTION_DIST) {
            // Opacity based on distance (closer = more opaque)
            const opacity = 1 - distance / CONNECTION_DIST
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 100, 255, ${opacity * 0.4})` // Blue-ish tint for lines
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    /* -------------------- Mouse Handlers -------------------- */
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-black hidden md:block" 
    />
  )
}

export { ParticleBackground }
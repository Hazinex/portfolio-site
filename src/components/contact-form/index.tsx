'use client';

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/shadcn/field"
import { Input } from "@/components/ui/shadcn/input"
import { Textarea } from "@/components/ui/shadcn/textarea"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError(false)

    const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())

    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error Status: ${response.status}`)
        }
        formRef.current?.reset()
        return response.json()
      })
    }
    catch (err) {
      setError(true)
      console.log(err)
    }
    finally {
      setSubmitted(true)
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="outline rounded-2xl mt-8 md:m-8 p-4 md:p-8 shadow-2xl bg-muted-foreground/10">
      <FieldSet>
        <FieldLegend>Contact Form</FieldLegend>
        <FieldDescription>Enter your information and message below</FieldDescription>
        <FieldSeparator />
        <FieldGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <Field>
              <FieldLabel htmlFor="firstname">First Name</FieldLabel>
              <Input id="firstname" name="firstname" type="text" placeholder="John" required />
            </Field>
            <Field className="mt-8 md:mt-0">
              <FieldLabel htmlFor="lastname">Last Name (optional)</FieldLabel>
              <Input id="lastname" name="lastname" type="text" placeholder="Smith" />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input id="email" name="email" type="email" placeholder="example@company.com" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="subject">Subject (optional)</FieldLabel>
            <Input id="subject" name="subject" type="text" placeholder="Inquiry" />
          </Field>
          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea
                id="message"
                name="message"
                placeholder="Hello, world!"
                required
                className="min-h-50 md:min-h-20"
              />
          </Field>
          <Button type="submit">
            {!sending ? (
              <p>Send Message</p>
            ) : (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
            )}
          </Button>
          {submitted && !error && (
            <p className="text-green-500">Your message has been sent successfully!</p>
          )}
          {submitted && error && (
             <p className="text-red-500">Sorry your message was not sent. Please reach out to me on LinkedIn or by using the details on my CV in the About section</p>
          )}
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export { ContactForm }
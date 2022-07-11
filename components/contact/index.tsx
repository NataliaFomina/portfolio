import classNames from "classnames"
import {
  Textarea,
  Stack,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import SectionHeader from "../shared/SectionHeader"
import { useCallback, useRef } from "react"

type Props = {
  formUrl: string
}

const Contact = ({ formUrl }: Props) => {
  const form = useRef<HTMLFormElement>(null)
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Must be a valid email"),
    message: Yup.string().required("Message is required"),
  })

  const handleSubmit = useCallback(async (_, { setSubmitting }) => {
    setSubmitting(true)
    try {
      form.current?.submit()
    } catch (e) {
    } finally {
      setSubmitting(false)
    }
  }, [])

  return (
    <section id="contact" className={classNames("signin", "section")}>
      <div className="container">
        <div className={classNames("signin-inner", "section-inner")}>
          <SectionHeader
            tag="h1"
            data={{
              title: "Write me a note",
            }}
            className="center-content"
          />
          <Formik
            validationSchema={formSchema}
            initialValues={{ email: "", message: "" }}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form
                action={formUrl}
                method="POST"
                style={{ maxWidth: "700px", margin: "0 auto" }}
                ref={form}
              >
                <Stack spacing={3}>
                  <FormControl
                    isInvalid={errors.email && touched.email ? true : false}
                  >
                    <Field
                      as={Input}
                      name="email"
                      type="email"
                      placeholder="Your email"
                      autoComplete="off"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={errors.message && touched.message ? true : false}
                  >
                    <Field
                      as={Textarea}
                      name="message"
                      placeholder="Your message"
                      autoComplete="off"
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>
                </Stack>
                <div className="mt-24 mb-32">
                  <Button
                    type="submit"
                    colorScheme="brand"
                    w="full"
                    isLoading={isSubmitting}
                  >
                    Send
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Contact

import { Button, Center, IconButton, Stack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FiChevronLeft, FiDownload } from "react-icons/fi"

const ResumePage = () => {
  const router = useRouter()
  return (
    <Stack height="100vh" spacing={0}>
      <Stack direction="row" p={15} spacing={15} alignItems="center">
        <IconButton
          icon={<FiChevronLeft fontSize="18px" />}
          aria-label=""
          onClick={() => router.back()}
        />
        <Button
          leftIcon={<FiDownload fontSize="18px" />}
          colorScheme="brand"
          onClick={() => {
            const a: HTMLAnchorElement = document.createElement("a")
            a.href = `/api/v1/resume`
            a.download = "Natalia_Fomina_Resume.pdf"
            a.style.display = "none"
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
          }}
        >
          Download
        </Button>
      </Stack>
      <Center w="full" h="full" overflow="scroll">
        <iframe
          width="100%"
          height="100%"
          src={`/pdf.js/web/viewer.html?file=/api/v1/resume`}
        />
      </Center>
    </Stack>
  )
}

export default ResumePage

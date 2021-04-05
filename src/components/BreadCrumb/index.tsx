import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const convertBreadcrumb = (string) => {
  return string
    .replace(/communities/g, 'comunidades')
    .replace(/users/g, 'usuários')
    .replace(/create/g, 'cadastro')
    .replace(/(^\d)/, 'edição')
    .toUpperCase()
}

export function BreadCrumb() {
  const [breadcrumbs, setBreadcrumbs] = useState(null)

  const router = useRouter()

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: convertBreadcrumb(path),
          href: '/' + linkPath.slice(0, i + 1).join('/')
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <Breadcrumb ml="1em">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Início</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

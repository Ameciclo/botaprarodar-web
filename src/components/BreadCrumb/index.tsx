import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const formatPath = (path: string) => {
  switch (path) {
    case 'users':
      return 'Usuários'
    default:
      return 'Edição'
  }
}

type CrumbItemProps = {
  page: string
  href: string
}

export function BreadCrumb() {
  const [crumbs, setCrumbs] = useState<CrumbItemProps[]>([])

  const router = useRouter()

  useEffect(() => {
    const linkPath = router.asPath.split('/').filter((value) => value !== '')

    const pathArray = linkPath.map((path, i) => {
      return {
        page: formatPath(path),
        href: '/' + linkPath.slice(0, i + 1).join('/')
      }
    })

    setCrumbs(pathArray)
  }, [router.asPath])

  if (!crumbs.length) {
    return null
  }

  return (
    <Breadcrumb ml="1em" role="navigation">
      {crumbs.map(({ page, href }) => (
        <BreadcrumbItem key={page}>
          <BreadcrumbLink href={href}>{page}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

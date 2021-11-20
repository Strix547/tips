import { forwardRef } from 'react'
import Link from 'next/link'

import { Button } from 'ui'

export const LinkButton = forwardRef(({ href, children, ...props }, ref) => (
  <Link ref={ref} href={href} passHref prefetch={false}>
    <Button as="a" {...props}>
      {children}
    </Button>
  </Link>
))

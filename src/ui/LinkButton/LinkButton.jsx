import Link from 'next/link'

import { Button } from 'ui'

export const LinkButton = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <Button as="a" {...props}>
      {children}
    </Button>
  </Link>
)

import React from 'react'
import { Button } from '../design-system/Button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../design-system/Card'
import { Input } from '../design-system/Input'

const Newsletter: React.FunctionComponent = () => {
  const [email, setEmail] = React.useState('')
  const handleClick = (e: any) => {
    e.preventDefault()
    console.log(e)
    console.log(email)
    console.log('submited')
  }

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Receive my updates</CardTitle>
        <CardDescription>
          For the latest news and updates, join my mailing list!
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleClick} className="flex gap-4">
          <Input
            name="email"
            type="email"
            placeholder="darthvader@deathstar.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" variant="default">
            Sign up
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default Newsletter

import {Alert, AlertTitle, AlertDescription} from "../components/ui/alert"
import { Button, buttonVariants } from "../components/ui/button"
export default function Home() {
  return (
    <main className="">
      <Button variant="destructive">Destructive</Button>
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
    </main>
  )
}

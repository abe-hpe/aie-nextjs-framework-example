import Image from 'next/image'
import { headers } from 'next/headers'

export default async function Page() {
  const myheaders = await headers()
  
  myheaders.forEach((value, key) => {
    console.log(`${key} ==> ${value}`);
  })

  const userpreferredname = myheaders.get('X-Auth-Request-Preferred-Username')
  const usergroups = myheaders.get('X-Auth-Request-Groups')
  const useremail = myheaders.get('X-Auth-Request-Email')
  
  return <div><h1>Next JS Example for AIE with SSO</h1><p>User name is { userpreferredname }</p><p>User email is { useremail }</p><p>User belongs to { usergroups }</p><Image src="/big-data-1.png" alt="Profile" width={400} height={400}/></div>
}

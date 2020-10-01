import React from "react"
import randomUsers from "./randomUsers.json"
import "./ContactItem.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom"

function ContactItem(props) {
  const { id } = useParams()

  let user = randomUsers[id - 1]

  // console.log(props.id)
  // let userIndex = randomUsers.findIndex(userID => userID = id)
  // let user = randomUsers[userIndex]
  // console.log(id)

  return (
    <div className="contactContainer">
        <Link to={"/"}>
          <img className="backArrow" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjExNyAxMmw3LjUyNyA2LjIzNS0uNjQ0Ljc2NS05LTcuNTIxIDktNy40NzkuNjQ1Ljc2NC03LjUyOSA2LjIzNmgyMS44ODR2MWgtMjEuODgzeiIvPjwvc3ZnPg==" />
        </Link>
      <div className="contactHeader">
        <img className="userImg" src={user.picture.large} />
      </div>
      <div className="contactBody">
        <div>
          <img className="svgImgs" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuODIyIDE4LjA5NmMtMy40MzktLjc5NC02LjY0LTEuNDktNS4wOS00LjQxOCA0LjcyLTguOTEyIDEuMjUxLTEzLjY3OC0zLjczMi0xMy42NzgtNS4wODIgMC04LjQ2NCA0Ljk0OS0zLjczMiAxMy42NzggMS41OTcgMi45NDUtMS43MjUgMy42NDEtNS4wOSA0LjQxOC0zLjA3My43MS0zLjE4OCAyLjIzNi0zLjE3OCA0LjkwNGwuMDA0IDFoMjMuOTlsLjAwNC0uOTY5Yy4wMTItMi42ODgtLjA5Mi00LjIyMi0zLjE3Ni00LjkzNXoiLz48L3N2Zz4=" />
          <span>{user.name.first} {user.name.last}</span>
        </div>
        <div>
          <img className="svgImgs" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTIuNzEzbC0xMS45ODUtOS43MTNoMjMuOTcxbC0xMS45ODYgOS43MTN6bS01LjQyNS0xLjgyMmwtNi41NzUtNS4zMjl2MTIuNTAxbDYuNTc1LTcuMTcyem0xMC44NSAwbDYuNTc1IDcuMTcydi0xMi41MDFsLTYuNTc1IDUuMzI5em0tMS41NTcgMS4yNjFsLTMuODY4IDMuMTM1LTMuODY4LTMuMTM1LTguMTEgOC44NDhoMjMuOTU2bC04LjExLTguODQ4eiIvPjwvc3ZnPg==" />
          <span>{user.email}</span>
        </div>
        <div>
          <img className="svgImgs" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYgMHYzaC04Yy0xLjEwNCAwLTIgLjg5Ni0yIDJ2MTdjMCAxLjEwNC44OTYgMiAyIDJoOGMxLjEwNCAwIDItLjg5NiAyLTJ2LTIyaC0yem0tNiAyMWgtMnYtMWgydjF6bTAtMmgtMnYtMWgydjF6bTAtMmgtMnYtMWgydjF6bTMgNGgtMnYtMWgydjF6bTAtMmgtMnYtMWgydjF6bTAtMmgtMnYtMWgydjF6bTMgNGgtMnYtMWgydjF6bTAtMmgtMnYtMWgydjF6bTAtMmgtMnYtMWgydjF6bTAtM2gtOHYtOGg4djh6Ii8+PC9zdmc+" />
          <span>{user.cell}</span>  
        </div>
        <div>
          <img className="svgImgs" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptOS41NjcgOS4wOThjLS4wNTktLjA1OC0uMTI3LS4xMDgtLjIwNi0uMTM4LS4yNTgtLjEwMS0xLjM1LjYwMy0xLjUxNS4yNTYtLjEwOC0uMjMxLS4zMjcuMTQ4LS41NzguMDA4LS4xMjEtLjA2Ny0uNDU5LS41Mi0uNjExLS40NjUtLjMxMi4xMTIuNDc5Ljk3NC42OTQgMS4wODcuMjAzLS4xNTQuODYtLjQ2OSAxLjAwMi0uMDM5LjI3MS44MTItLjc0NSAxLjcwMi0xLjI2NCAyLjE3MS0uNzc1LjcwMi0uNjMtLjQ1NC0xLjE1OS0uODYtLjI3Ny0uMjEzLS4yNzQtLjY2Ny0uNTU1LS44MjQtLjEyNS0uMDcxLS43LS43MzItLjY5NC0uODIxbC0uMDE3LjE2N2MtLjA5NS4wNzItLjI5Ny0uMjctLjMxOS0uMzI1IDAgLjI5OC40ODUuNzcyLjY0NiAxLjAxMS4yNzMuNDA5LjQyIDEuMDA1Ljc1NiAxLjMzOS4xNzkuMTguODY2LjkyMyAxLjA0NS45MDhsLjkyMS0uNDM3Yy42NDkuMTU0LTEuNTMxIDMuMjM3LTEuNzM4IDMuNjE5LS4xNzEuMzIxLjEzOSAxLjExMi4xMTQgMS40OS0uMDI5LjQzNy0uMzc0LjU3OS0uNy44MTctLjM1LjI1NS0uMjY4Ljc1Mi0uNTYyLjkzNC0uNTIxLjMyMS0uODk3IDEuMzY2LTEuNjM5IDEuMzYxLS4yMTktLjAwMS0xLjE1MS4zNjQtMS4yNzMuMDA3LS4wOTUtLjI1OC0uMjIzLS40NTUtLjM1Ni0uNzEtLjEzMS0uMjUtLjAxNS0uNTEtLjE3NS0uNzMxLS4xMS0uMTU0LS40NzktLjUwMi0uNTEzLS42ODQtLjAwMi0uMTU3LjExOC0uNjMyLjI4My0uNzE1LjIzMS0uMTE4LjA0NC0uNDYyLjAxNi0uNjYzLS4wNDgtLjM1Ny0uMjctLjY1Mi0uNTM1LS44NTktLjM5My0uMzAyLS4xODktLjU0Mi0uMDk4LS45NzQgMC0uMjA2LS4xMjYtLjQ3Ni0uNDAyLS4zOTYtLjU3LjE2Ni0uMzk2LS40NDUtLjgxMi0uNDE3LS4yOTkuMDIxLS41NDMuMjExLS44MjEuMjk1LS4zNDkuMTA0LS43MDctLjA4My0xLjA1My0uMTI2LTEuNDIxLS4xNzktMS44ODUtMS44MDQtMS41MTQtMi45NzYuMDM3LS4xOTItLjExNS0uNTQ3LS4wNDgtLjY5Ni4xNTktLjM1Mi40ODUtLjc1Mi43NjgtMS4wMjEuMTYtLjE1Mi4zNjUtLjExMy41NTMtLjIzMS4yOS0uMTgyLjI5NC0uNTU4LjU3OC0uNzg5LjQwNC0uMzI4Ljk1Ni0uMzIxIDEuNDgyLS4zOTIuMjgxLS4wMzcgMS4zNS0uMjY4IDEuNTE4LS4wNiAwIC4wMzkuMTkzLjYxMS0uMDE5LjU3OC40MzguMDIzIDEuMDYxLjc1NiAxLjQ3Ni41ODUuMjEzLS4wODkuMTM1LS43NDQuNTczLS40MjcuMjY1LjE5IDEuNDUuMjc1IDEuNjk2LjA3LjE1Mi0uMTI1LjIzNi0uOTM5LjA1My0xLjAzMS4xMTcuMTE2LS42MTguMTI1LS42ODYuMDk5LS4xMjItLjA0NC0uMjM1LjExNS0uNDMuMDI1LjExNy4wNTUtLjY1MS0uMzU4LS4yMi0uNjc0LS4xODEuMTMyLS4zNDktLjAzNy0uNTQ0LjEwOS0uMTM1LjEwOS4wNjIuMTgxLS4xMy4yNzctLjMwNS4xNTUtLjUzNS0uNTMtLjY0OS0uNjA3LS4xMTgtLjA3Ny0xLjAyNC0uNzEzLS43NzctLjI5OGwuNzk3Ljc5M2MtLjA0LjAyNi0uMjA5LS4yODktLjIwOS0uMDU5LjA1My0uMTM2LjAyLjU4NS0uMTA1LjM1LS4wNTYtLjA5LjA5MS0uMTQuMDA2LS4yNzEgMC0uMDg1LS4yMy0uMTY5LS4yNzUtLjIyOC0uMTI2LS4xNTctLjQ2Mi0uNTAyLS42NDQtLjU4NS0uMDUtLjAyNC0uNzcxLjA4OC0uODMyLjExMS0uMDcxLjA5OS0uMTMxLjIwMy0uMTgxLjMxNC0uMTQ5LjA1NS0uMjkuMTI3LS40MjMuMjE2bC0uMTU5LjM1NmMtLjA2OC4wNjEtLjc3Mi4yOTQtLjc3Ni4zMDMuMDMtLjA3Ni0uNDkyLS4xNzItLjQ1Ny0uMzI0LjAzOC0uMTY3LjIxNS0uNjg3LjE2OS0uODc3LS4wNDgtLjE5OSAxLjA4NS4yODcgMS4xNTgtLjIzOC4wMjktLjIyNy4wNDctLjQ5Mi0uMzE2LS41MzEuMDY5LjAwOC43MDItLjI0OS44MDctLjM2NC4xNDgtLjE2OS40ODYtLjQ0Ny43MzEtLjQ0Ny4yODYgMCAuMjI1LS40MTcuMzU2LS42MjIuMTMzLjA1My0uMDcxLjM4LjA4OC41MTItLjAxLS4xMDQuNDUuMDU3LjQ5NC4wMzMuMTA1LS4wNTYuNjkxLS4wMjMuNjAxLS4yOTktLjEwMS0uMjguMDUyLS4xOTcuMTgzLS4yNTUtLjAyLjAwOC4yNDgtLjQ1OC4zNjMtLjQ1Ni0uMTA0LS4wODktLjM5OC4xMTItLjUxNi4xMDMtLjMwOC0uMDI0LS4xNzctLjUyNS0uMDYxLS42NzIuMDktLjExNi0uMjQ2LS4yNTgtLjI1LS4wMzYtLjAwNi4zMzItLjMxNC42MzMtLjI0MyAxLjA3NS4xMDkuNjY2LS43NDMtLjE2MS0uODE2LS4xMTUtLjI4My4xNzItLjUxNS0uMjE2LS4zNjgtLjQ0OS4xNDktLjIzOC41MS0uMjI2LjY1OS0uNDguMTA0LS4xNzkuMjI3LS4zODkuMzg4LS41MjQuNTQxLS40NTQuNjg5LS4wOTEgMS4yMjktLjA0Mi41MjYuMDQ4LjE3OC4xMjUuMTA1LjMyNy0uMDcuMTkyLjI4OS4yNjEuNDEzLjEuMDcxLS4wOTIuMjMyLS4zMjYuMzAxLS40OTkuMDctLjE3NS41NzgtLjIuNTI3LS4zNjUgMi43MiAxLjE0OCA0LjgyNyAzLjQ2NSA1LjY5NCA2LjMxOHptLTExLjExMy0zLjc3OWwuMDY4LS4wODcuMDczLS4wMTljLjA0Mi0uMDM0LjA4Ni0uMTE4LjE1MS0uMTA0LjA0My4wMDkuMTQ2LjA5NS4xMTEuMTQ4LS4wMzcuMDU0LS4wNjYtLjA0OS0uMDgxLjEwMS0uMDE4LjE2OS0uMTg4LjE2Ny0uMzEzLjIyMi0uMDg3LjAzNy0uMTc1LS4wMTgtLjA5LS4xMDRsLjA4OC0uMTA4LS4wMDctLjA0OXptLjQ0Mi4yNDVjLjA0Ni0uMDQ1LjEzOC0uMDA4LjE1MS0uMDk0LjAxNC0uMDg0LjA3OC0uMTc4LS4wMDgtLjMzNS0uMDIyLS4wNDIuMTE2LS4wODIuMDUxLS4xMzdsLS4xMDkuMDMycy4xNTUtLjY2OC4zNjQtLjM2NmwtLjA4OS4xMDNjLjEzNS4xMzQuMTcyLjQ3LjIxNS42ODcuMTI3LjA2Ni4zMjQuMDc4LjA5OC4xOTIuMTE3LS4wMi0uNjE4LjMxNC0uNzE1LjE3OC0uMDcyLS4wODMuMzE3LS4xMzkuMzA3LS4xNzMtLjAwNC0uMDExLS4zMTctLjAyLS4yNjUtLjA4N3ptMS40My0zLjU0N2wtLjM1Ni4zMjZjLS4zNi4yOTgtMS4yOC44ODMtMS43OTMuNzA1LS41MjQtLjE4LTEuNjQ3LjY2Ny0xLjgyNi42NzMtLjA2Ny4wMDMuMDAyLS42NDEuMzYtLjY4OS0uMTQxLjAyMS45OTMtLjU3NSAxLjE4NS0uODA1LjY3OC0uMTQ2IDEuMzgxLS4yMjcgMi4xMDQtLjIyN2wuMzI2LjAxN3ptLTUuMDg2IDEuMTljLjA3LjA4Mi4yNzguMDkyLS4wMjYuMjg4LS4xODMuMTEtLjM3Ny44MDktLjU0OC44MDktLjUxLjIyMy0uNTQyLS40MzktMS4xMDkuNDEzLS4wNzguMTE1LS4zOTUuMTU4LS42NDQuMjM2LjY4NS0uNjg4IDEuNDY4LTEuMjc5IDIuMzI3LTEuNzQ2em0tNS4yNCA4Ljc5M2MwLS41NDEuMDU1LTEuMDY4LjEzOS0xLjU4NmwuMjkyLjE4NWMuMTEzLjEzNS4xMTMuNzE5LjE2OS45MTEuMTM5LjQ4Mi40ODQuNzUxLjc0OCAxLjE5LjE1NS4yNjEuNDE0LjkyMy4zMzIgMS4xOTcuMTA5LS4xNzkgMS4wODEuODI0IDEuMjU5IDEuMDMzLjQxOC40OTIuNzQgMS4wODguMDYxIDEuNTc0LS4yMTkuMTU4LjMzNCAxLjE0LjA0OSAxLjM4MmwtLjM2NS4wOTRjLS4yMjUuMTM4LS4yMzUuMzk3LS4xNjYuNjMxLTEuNTYyLTEuNzY1LTIuNTE4LTQuMDc2LTIuNTE4LTYuNjExem0xNC4zNDctNS44MjNjLjA4My0uMDEtLjEwNy4xNjctLjEwNy4xNjcuMDMzLjI1Ni4yMjIuMzk2LjU4MS41MjcuNDM3LjE1Ny4wMzguNDU1LS4yMTMuMzg1LS4xMzktLjAzOS0uODU0LS4yNTUtLjg3OS4wMjUgMCAuMTY3LS42NzkuMDAxLS41NzMtLjE3NS4wNzMtLjExOS4wNS0uMzg3LjE4Ni0uNTYyLjE5My0uMjU1LjM4LS4xMTYuMzg2LjAzMi0uMDAxLjM5NC4zOTgtLjM3My42MTktLjM5OXoiLz48L3N2Zz4=" />
          <span>{user.location.city}, {user.location.state}</span>
        </div>
      </div>
    </div>
  )
}

export default ContactItem

import { useState } from "react";
import { ArticleList, Header } from "./components";
import { Form } from "./components/Form/Form";

export default function App () {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);
  return (
    <div className="h-screen ">
      <Header user={ user }/>
      {!hasUser && <Form onSubmit={setUser}/>}
      {hasUser && <ArticleList /> }
    </div>
  )
}
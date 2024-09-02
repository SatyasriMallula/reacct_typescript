import React from "react";
import "./App.css";
import { User } from "./Components/props";
import { PersonList } from "./Components/objandarrayprop";
import { ChildProps } from "./Components/ChildProps";
import { UnionOfLiteral } from "./Components/UnionOfLiteral";
import { OptionalProps } from "./Components/OptionalParams";
import { InputEvent } from "./Components/Event Props/InputEvent";
import FirstVarient from "./Components/Event Props/FirstVarient";
import { SecondVarient } from "./Components/Event Props/SecondVarient";
import { StyleProps } from "./Components/StyleProps/StyleProps";
import { DestructuringProps } from "./Components/Event Props/DestructuringProps";
import { ExportingTypes } from "./Components/ExportingTypes/ExportingTypes";
import { ThemeContextProvider } from "./Components/Hooks/USECONTEXT/ThemeContextProvider";
import { Box } from "./Components/Hooks/USECONTEXT/Box";
import { MutableRef } from "./Components/Hooks/USEREF/MutableRef";
import { Counter } from "./Components/ClassComponent/Counter";
import { Private } from "./Components/ComponentProps/Private";
import { Profile } from "./Components/ComponentProps/Profile";
import { List } from "./Components/GenericProps/List";
import { RestrictProps } from "./Components/RestrictProps/RestrictProps";
import { TemplateLiteral } from "./Components/TemplateLiteral/TemplateLiteral";
import { ExcludeOperator } from "./Components/TemplateLiteral/ExcludeOperator";
import { CustomButon } from "./Components/WrappingHtmlElements/CustomButon";
import { OmitButon } from "./Components/WrappingHtmlElements/Omit";
import { Greet } from "./Components/ExtractingComponentPropTypes/Greet";
import { Text } from "./Components/PolymorphicComponents/Text";

function App() {
  const person = [
    {
      name: "satya",
      age: 23,
    },
    {
      name: "Sachin",
      age: 23,
    },
    {
      name: "Subbu",
      age: 23,
    },
  ];

  return (
    <div className="App">
      {/* <User name="satya" logging={false} value={30} />
      <PersonList person={person} /> */}
      {/* <ChildProps>
        <h1>Hello welcome to typescript</h1>
      </ChildProps>
      <UnionOfLiteral status="Success" />
      <OptionalProps name="Satya" isLogged={true} /> */}
      {/* <FirstVarient handleClick={() => console.log("Button clicked")} />
      <SecondVarient
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      /> */}
      {/* <InputEvent
        value="satya"
        handleChange={(event) => {
          console.log("InputEvent", event);
        }}
      /> */}
      {/* <StyleProps styles={{ border: "2px", padding: "rem" }} />
      <DestructuringProps handleChange={(e) => console.log(e)} />
      <ExportingTypes name="satya" age={23} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <MutableRef />
      <Counter message="Hello this is class component" /> */}
      <Private isLogedIn={true} Component={Profile}></Private>
      {/* <List
        items={["BatsMan", "superMan", "wonderWomen"]}
        onClick={(item) => console.log(item)}
      ></List>
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)}></List> */}
      <List
        items={[
          {
            id: 1,
            first: "satya",
            last: "M",
          },
          {
            id: 2,
            first: "satya",
            last: "M",
          },
        ]}
        onClick={(item) => console.log(item)}
      ></List>
      <RestrictProps value={10} isPositive />
      <TemplateLiteral position="" />
      <ExcludeOperator position="center-top" />
      <CustomButon variant="primary">
        <button>Click me</button>
      </CustomButon>
      <OmitButon variant="primary">Hello</OmitButon>
      <Greet name="satya" email="satya@gmail.com" isLoggedIn />
      <Text as="h1" htmlFor="id" size="lg">
        Heading
      </Text>
      <Text as="p" size="lg">
        Paragraph
      </Text>
      <Text as="label" size="lg" htmlFor="id" color="secondary">
        label
      </Text>
    </div>
  );
}

export default App;

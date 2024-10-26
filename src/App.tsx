import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <div className="h-screen w-full bg-gray-800 flex items-center justify-center">
      <div className="mb-2">
        <Input id="name" label="Name" type="text" placeholder="Enter Name" />
        <Input id="name" label="Email" type="email" placeholder="Enter Mail" />
        <Button className="px-2 py-1 bg-gray-500 rounded-sm mx-2">
          Click Me
        </Button>
        <Container className="px-2 py-1 bg-gray-500 rounded-sm" as={"button"}>
          Click Me
        </Container>
      </div>
    </div>
  );
}

export default App;

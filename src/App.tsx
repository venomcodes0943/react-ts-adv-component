import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
  const handleData = (data: unknown) => {
    const orgData = data as { name: string; age: string };
    console.log(orgData);
  };
  return (
    <div className="h-screen w-full bg-gray-800 flex items-center justify-center">
      <div className="mb-2">
        <Form onSave={handleData}>
          <Input id="name" label="Name" type="text" placeholder="Enter Name" />
          <Input
            id="emali"
            label="Email"
            type="email"
            placeholder="Enter Mail"
          />
          <Button className="px-2 py-1 bg-gray-500 rounded-sm mx-2">
            Click Me
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  console.log(email, password)

  const navigate = useNavigate();
 
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (email && password) {
      navigate('/');
    }
    
  };


  return (
    <div className=" flex items-center justify-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input onChange={({target}) => setEmail(target.value)} label="Email" size="lg" />
          <Input onChange={({target}) => setUsername(target.value)} label="Username" size="lg" />
          <Input onChange={({target}) => setPassword(target.value)} label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button type="submit" onClick={ handleLogin } variant="gradient" fullWidth>
            Sign up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link to='/login'>
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Login
              </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

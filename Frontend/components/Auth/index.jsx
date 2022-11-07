import React, { useState } from "react";
import { Text, Stack, Button, Box, Input } from "@chakra-ui/react";
import Link from "next/link";

const Auth = () => {
  const [toggle, setToggle] = useState();

  return (
    <div className={`auth-container ${toggle && "sign-up-mode"}`}>
      <div className="forms-container">
        <Box className="signin-signup">
          <form action="#" className="sign-in-form">
            <Stack textAlign="center">
              {" "}
              <h2 className="title">Login</h2>
              <div>
                <Input mb={6} width="300px" placeholder="Email" />
              </div>
              <div>
                <Input
                  mb={6}
                  width="300px"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <Button>Login</Button>
            </Stack>
          </form>

          <form bg="red" px={20} action="#" className="sign-up-form">
            <Stack textAlign="center">
              <h2 className="title">Register</h2>
              <div>
                <Input mb={6} width="300px" placeholder="First Name" />
              </div>
              <div>
                <Input mb={6} width="300px" placeholder="Last Name" />
              </div>
              <div>
                <Input mb={6} width="300px" placeholder="Email" />
              </div>
              <div>
                <Input
                  mb={6}
                  width="300px"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <Button>Register</Button>
            </Stack>
          </form>
        </Box>
      </div>

      <div className="panels-container">
        <Box className="panel left-panel">
          <Box className="content">
            <Text fontSize="40px" fontWeight={"bold"}>
              New to Threza?
            </Text>
            <Text fontSize={"sm"} mb={4}>
              Go Back{" "}
              <Link
                style={{ textDecoration: "underline", color: "#d376ea" }}
                href="/"
              >
                Home
              </Link>{" "}
            </Text>
            <Button
              variant={"outline"}
              className="btn transparent"
              onClick={() => setToggle(!toggle)}
              id="sign-up-btn"
            >
              Register
            </Button>
          </Box>
        </Box>
        <div className="panel right-panel">
          <div className="content">
            <Text fontSize="40px" fontWeight={"bold"}>
              Part of the Community?
            </Text>
            <Text fontSize={"sm"} mb={4}>
              Go Back{" "}
              <Link
                style={{ textDecoration: "underline", color: "#d376ea" }}
                href="/"
              >
                Home
              </Link>{" "}
            </Text>
            <Button
              variant={"outline"}
              className="btn transparent"
              onClick={() => setToggle(!toggle)}
              id="sign-in-btn"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

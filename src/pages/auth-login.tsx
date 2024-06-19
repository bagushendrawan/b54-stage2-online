import CircleLogo from "@/assets/logo.svg";
import { LoginForm } from "@/features/auth-login/components/login-form";
import { Box, Image, Text } from "@chakra-ui/react";

function LoginPage() {
  return (
    <Box
      display={"flex"}
      height={"75vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Box marginBottom={"15px"}>
          <Image src={CircleLogo} height={"20px"} />
          <Text fontWeight={"bold"} fontSize={"30px"} color={"white"}>
            Login to Circle
          </Text>
        </Box>
        <LoginForm width={"500px"} />
      </Box>
    </Box>
  );
}

export default LoginPage;

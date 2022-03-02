import React from "react";
import PropTypes from "prop-types";
import Main from "./Main";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../helpers/profile";
import "./Profile.css"


const Profile = ({ user }) => {
  return (
    <div className="profile">
      <ChakraProvider theme={theme}>
        <Main user={user} />
      </ChakraProvider>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;

import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router-dom";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function UserMenu(props) {
  const { HandleLogOut, userInfo } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMyAccount = () => {
    props.history.push(`/users/myAccount`);
    setAnchorEl(null);
  };
  console.log("userInfo--userInfo", userInfo);
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
      >
        Hi&nbsp;{userInfo?.username}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleMyAccount}>My account</MenuItem>
        <MenuItem onClick={HandleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export default withRouter(UserMenu);

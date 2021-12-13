import {useContext, useState} from "react";
import { withRouter } from "react-router-dom";
import {LanguageContext} from '../context/languageprovider-context'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Search from './search';

const Header = (props) => {
  const [language, setlanguage] = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const sinUp = () => {
    props.history.push(`/signUp`);
  };
  const login = () => {
    props.history.push(`/login`);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  const languageChange =(lang)=>{
    setlanguage(lang)
  }

  return (
    <div className="row" >
      <nav class="navbar navbar-light  navbar-bglight">
        <div className="row col-lg-2 logoSection" onClick={()=>props.history.push(`/`)} >
          <div className="col-lg-6">
            <img src="https://www.getmusicbee.com/img/musicbee.png" />
          </div>
          <div className="col-lg-4 beeMusicText">
            <h4 class="navbar-brand">Bee Music</h4>
          </div>
        </div>
        <div className="col-lg-5">
          <form class="form-inline">
            <div className="row col-12">
              <div className="col-lg-6">
                {/* <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                /> */}
                <Search/>
              </div>
             
              <div className="col-lg-2">
              <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        language
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>
<button onClick={()=>languageChange("english")}>english</button>
<button onClick={()=>languageChange("spanish")}>spanish</button>
        </Typography>
      </Popover>
              </div>
              <div className="col-lg-2">
                <p className="LoginSign-btn login-button-ml" onClick={()=>login()}>Login </p>
              </div>
              <div className="col-lg-2">
                <p className="LoginSign-btn" onClick={()=>sinUp()}>/ SignUp</p>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Header);

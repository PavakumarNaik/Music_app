import { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { LanguageContext } from "../context/languageprovider-context";
import { AuthContext } from "../context/auth-context";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchBox from "./search";
import UserMenu from "../components/userMenu";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import Dialog from "@material-ui/core/Dialog";
import LoginContainer from "../components/loginContainer";
import SignUpContainer from "../components/singupContainer";
import DialogContent from "@material-ui/core/DialogContent";

const Header = (props) => {
  const [language, setlanguage] = useContext(LanguageContext);
  const [authToken, setAuth] = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isToken, setIsToken] = useState(false);
  const usersCollectionRef = collection(db, "users");
  const [users, SetUsers] = useState([]);
  const [loginModelOpen, setLoginModelOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    if (authToken.idToken !== null && authToken.idToken !== undefined) {
      setIsToken(true);
    }
  }, [authToken.idToken]);

  useEffect(async () => {
    const data = await getDocs(usersCollectionRef);
    let userList = [];
    data.docs.forEach((doc) => {
      userList.push({ ...doc.data(), id: doc.id });
    });
    let currentUserInfo = userList?.find(
      (x) => x.email === authToken.userInfo.email
    );
    console.log("currentUserInfo", currentUserInfo);
    SetUsers(currentUserInfo);
  }, []);

  const sinUp = () => {
    setLoginModelOpen(true);
    setShowForm(true);
  };
  const login = () => {
    setShowForm(false);
    setLoginModelOpen(true);
  };
  const handleLoginClose = () => {
    setLoginModelOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const languageChange = (lang) => {
    setlanguage(lang);
  };

  const logout = () => {
    localStorage.removeItem("userID");
    setIsToken(false);
  };
  console.log("users+___", users);
  var base64Icon = "data:image/png;base64,iVBORw0KGgoAAAANS...";
  console.log("base64Icon",base64Icon);
  return (
    <div className="row">
      <nav class="navbar navbar-light  navbar-bglight">
        <div
          className="row col-lg-2 logoSection"
          onClick={() => props.history.push(`/`)}
        >
          <div className="col-lg-6">
            <img src="https://www.getmusicbee.com/img/musicbee.png" />
          </div>
          <div className="col-lg-4 beeMusicText">
            <h4 class="navbar-brand">Bee Music</h4>
          </div>
        </div>
        <div className="col-lg-6">
          <SearchBox />
        </div>
        <div className="col-lg-4">
          <div className="row col-12">
            <div className="col-lg-6">
              <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                language
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  <button onClick={() => languageChange("english")}>
                    english
                  </button>
                  <button onClick={() => languageChange("spanish")}>
                    spanish
                  </button>
                </Typography>
              </Popover>
            </div>
            {!isToken ? (
              <>
                <div className="col-lg-3">
                  <p
                    className="LoginSign-btn login-button-ml"
                    onClick={() => login()}
                  >
                    Login{" "}
                  </p>
                </div>

                <div className="col-lg-2">
                  <p className="LoginSign-btn" onClick={() => sinUp()}>
                    / SignUp
                  </p>
                </div>
              </>
            ) : (
              <div className="row col-lg-5">
                <div className="col-lg-3">
                  <UserMenu
                    HandleLogOut={logout}
                    userInfo={authToken.userInfo}
                  />
                </div>
                <div className="col-lg-2">
                  <img src={base64Icon} className="play" />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Dialog
        onClose={handleLoginClose}
        aria-labelledby="customized-dialog-title"
        open={loginModelOpen}
      >
        <DialogContent>
          {showForm ? <SignUpContainer login={login}/> : <LoginContainer handleLoginClose={handleLoginClose}/>}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withRouter(Header);

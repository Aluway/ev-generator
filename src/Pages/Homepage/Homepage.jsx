import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import NavBar from "../../Components/NavBar/NavBar";
import EvSetting from "../../Components/EvSetting/EvSetting";
import EvResult from "../../Components/EvResult/EvResult";

import firebase from "../../firebase";

import "./Homepage.scss";

import getPresets from "../../actions/getPresets";
import EvSetup from "../../utilityFunctions/evSetup";

function Homepage() {
  const dispatch = useDispatch();

  const [presets, setPresets] = useState([]);
  const [loading, setLoading] = useState(true);

  const ref = firebase.firestore().collection("presets");

  useEffect(() => {
    const fetchPresets = async () => {
      setLoading(true);
      let allPresetsData = await ref.get();
      let allPresets = allPresetsData.docs.map((doc) => doc.data());
      setPresets(allPresets);
      setLoading(false);
    };
    fetchPresets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  dispatch(getPresets(presets));

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="main__container">
          <h1 className="main__header">Wait a sec... Setting your app.</h1>
        </div>
      </>
    );
  } else {
    return (
      <div className="main__container">
        <h1 className="main__header">Let's evaluate!</h1>
        <div className="main__content">
          <EvSetting />
          <EvResult />
        </div>
        <EvSetup />
      </div>
    );
  }
}

export default Homepage;

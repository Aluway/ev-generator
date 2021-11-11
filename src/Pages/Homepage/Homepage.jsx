import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import NavBar from "../../Components/NavBar/NavBar";
import EvSetting from "../../Components/EvSetting/EvSetting";
import EvResult from "../../Components/EvResult/EvResult";

import firebase from "../../firebase";

import "./Homepage.scss";

import getPresets from "../../actions/getPresets";
import EvSetup from "../../utilityFunctions/evSetup";
import Footer from "../../Components/Footer/Footer";

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

  dispatch(getPresets(presets)); // I just had to move it over there! OMG! AND THAT'S ALL? 5 HOURS JUST TO MOVE ONE LINE?

  if (loading) {
    return <h1>Let's load a little bit</h1>;
  } else {
    return (
      <div>
        <div className="main__navbar">
          <NavBar />
        </div>
        <div className="main__container">
          <h1 className="main__header">
            Hey there! That's my attempt to make a kind of an evaluation
            generator for my English Classes on a platform.
          </h1>
          <div className="main__content">
            <EvSetting />
            <EvResult />
          </div>
          <EvSetup />
        </div>
        <div className="main__footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;

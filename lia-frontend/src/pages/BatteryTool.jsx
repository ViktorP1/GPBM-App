import { Fragment, useState } from "react";
import List from "../components/List";
import Slider from "../components/Slider";
import Stepper from "../components/Stepper";
import MARKETS from "../data/MARKETS";
import Styles from "./BatteryTools.module.css";
import axios from "axios";

export default function BatteryTool() {
  const [progress, setProgress] = useState("1");
  const [market, setMarket] = useState(null);
  const [application, setApplication] = useState(null);
  const [items, setTemperature] = useState(null);
  const [current, setCurrent] = useState("0");
  const [serviceLife, setServiceLife] = useState("0");

  function backHandler() {
    if (progress === "2") {
      setApplication(null);
      setProgress("1");
    }
    if (progress === "3") {
      setTemperature(null);
      setProgress("2");
    }
    if (progress === "4") {
      setCurrent(null);
      setProgress("3");
    }
    if (progress === "5") {
      setServiceLife(0);
      setProgress("4");
    }
    if (progress === "6") {
      setProgress("5");
    }
    if (parseInt(progress) < 1 || parseInt(progress) > 6) {
      return;
    }
  }

  function marketClickHandler(item) {
    setMarket(item);
    setProgress("2");
  }
  function applicationClickHandler(item) {
    setApplication(item);
    setProgress("3");
  }
  function temperatureClickHandler(item) {
    setTemperature(item);
    setProgress("4");
  }
  function currentSelectionHandler(current) {
    setCurrent(current);
    setProgress("5");
  }
  function serviceLifeSelectionHandler(serviceLife) {
    setServiceLife(serviceLife);
    setProgress("6");
  }

  async function sendResult(e) {
    e.preventDefault();

    try {
      const savedStatistics = {
        market: market.name,
        application: application.name,
        items: items.name,
        current: current,
        serviceLife: serviceLife,
      };

      await axios.post(
        "http://localhost:4000/statistics",
        savedStatistics
      );
    } catch (err) {
      console.error(err);
    }
    setProgress("1");
  }

  function sendEmail() {
    let results = localStorage.getItem("results");
    console.log(results);
  }

  return (
    <Fragment>
      <h1 className="big-title">Battery selection guide</h1>

      <Stepper progress={progress} />

      {progress === "1" && (
        <>
          <h2 className={Styles.sectionTitle}>Select market</h2>
          <div className={Styles.section}>
            <List items={MARKETS} onSelected={marketClickHandler} />
          </div>
        </>
      )}

      {progress === "2" && (
        <>
          <h2 className={Styles.sectionTitle}>Select application</h2>
          <div className={Styles.section}>
            <List
              items={market.applications}
              onSelected={applicationClickHandler}
            />
          </div>
        </>
      )}

      {progress === "3" && (
        <>
          <h2 className={Styles.sectionTitle}>Select temperature range</h2>
          <div className={Styles.section}>
            <List
              items={[
                {
                  id: "id1",
                  name: "Indoor",
                  img: "indoor.jpg",
                },
                {
                  id: "id2",
                  name: "Outdoor",
                  img: "outdoor.jpg",
                },
              ]}
              onSelected={temperatureClickHandler}
            />
          </div>
        </>
      )}

      {progress === "4" && (
        <div>
          <h2 className={Styles.sectionTitle}>Select current</h2>
          <div className={Styles.section}>
            <Slider
              min="0"
              max="20"
              step="1"
              value={current}
              onSubmit={currentSelectionHandler}
            />
          </div>
        </div>
      )}

      {progress === "5" && (
        <div>
          <h2 className={Styles.sectionTitle}>Select service life</h2>
          <div className={Styles.section}>
            <Slider
              min="0"
              max="10"
              step="1"
              value={serviceLife}
              onSubmit={serviceLifeSelectionHandler}
            />
          </div>
        </div>
      )}

      {progress === "6" && (
        <div>
          <h2 className={Styles.sectionTitle}>Review your selections</h2>
          <div className={Styles.resultPage}>

            <div className={Styles.resultPic}>
              
            </div>

            <div className={Styles.resultTable}>
              <table className={Styles.tableSelection}>
                <tbody className="table1">
                <tr>
                  <td>Market area</td>
                  <td>{market.name}</td>
                </tr>
                <tr>
                  <td>Application</td>
                  <td>{application.name}</td>
                </tr>
                <tr>
                  <td>Conditions</td>
                  <td>{items.name}</td>
                </tr>
                <tr>
                  <td>Service life</td>
                  <td>{serviceLife}</td>
                </tr>
                <tr>
                  <td>Power consumption</td>
                  <td>{current}</td>
                </tr>
                </tbody>
              </table>
            </div>
            
            <div className={Styles.resultButton}>
              <button className="big-button" onClick={sendResult}>
                Get my results
              </button>
            </div>

          </div>
        </div>
      )}

      {parseInt(progress) > 1 && (
        <button className="big-button" onClick={backHandler}>
          &larr; Back
        </button>
      )}
    </Fragment>
  );
}

/*

<div className={Styles.resultSection}>
          <button className="big-button" onClick={sendResult}>
            Get my results
          </button>
          <a href="mailto:test@test.com?subject=Test of the email pop-up&body=Hello world!">
            Send email
          </a>
          <button className="big-button" onClick={sendEmail}>
            Send Email
          </button>
        </div>

*/
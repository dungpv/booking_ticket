import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./output.css"; // tailwind run build
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//Cấu hình realtime (websocket với signalR)
import * as signalR from "@aspnet/signalr";
import { DOMAIN_SIGNALR } from "./util/settings/config";
import "./i18n";

//Đoạn code để kết nối đến server lắng nghe sự kiện từ server
export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN_SIGNALR}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection
  .start()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,

      document.getElementById("root")
    );
  })
  .catch((errors) => {
    console.log(errors);
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

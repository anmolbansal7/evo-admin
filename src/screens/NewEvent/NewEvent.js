import { useState } from "react";
import Navbar from "../components/Navbar";
import "./NewEvent.css";
import InputBox from "../components/InputBox";
import FilledButton from "../components/FilledButton";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { styled } from "@mui/system";
import DateAdapter from "@mui/lab/AdapterLuxon";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import FileUpload from "../components/FileUpload";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const TextArea = styled(TextareaAutosize)(() => ({
  width: "84%",
  backgroundColor: "#181818",
  borderRadius: "16px",
  border: "none",
  padding: "1rem",
  color: "#fcfcfc",
  margin: "0.75rem 0",
  fontFamily: "poppins, sans-serif",
  fontSize: "1rem",
  "&:focus": {
    outline: "none",
    border: "none",
  },
  "&:placeholder": {
    fontFamily: "poppins, sans-serif",
    color: "#6E7191",
  },
}));

const ChipActual = styled(Chip)(() => ({
  color: "#fcfcfc",
  margin: "0.75rem 0"
}));

function NewEvent() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [formValues, setFormValues] = useState({
    title: "",
    body: "",
    image: null,
    data: "",
  });

  return (
    <div>
      <div className="cont-dash">
        <div className="left">
          <Navbar />
        </div>
        <div className="middle-new">
          <p className="title">New Event</p>
          <InputBox type="text" place="Name of the Event" />
          <TextArea
            aria-label="minimum height"
            minRows={5}
            placeholder="Event Description"
          />
          {/* <InputBox type="date" place="Date of the Event" /> */}
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Basic example"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Basic example"
              value={time}
              onChange={(newValue) => {
                setTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {/* <InputBox type="time" place="Time Duration" /> */}
          <InputBox type="number" place="Price" />
          <InputBox type="link" place="Registration Link" />
          <FilledButton text="Publish Event" />
        </div>
        <div className="right-new">
          <FileUpload formValues={formValues} setFormValues={setFormValues} />
          <Stack direction="row" spacing={1}>
            <ChipActual label="Hackathons" variant="outlined" />
            <ChipActual label="Workshops" variant="outlined" />
            <ChipActual label="NGO" variant="outlined" />
            <ChipActual label="Gravitas" variant="outlined" />
            <ChipActual label="Riviera" variant="outlined" />
            <ChipActual label="Cultural" variant="outlined" />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default NewEvent;

import { useState } from "react";
import { Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const EditableDescription = ({ event, text, dataSource, classes, setData }) => {
  const { TextArea } = Input;
  const [textAreaValue, setTextAreaValue] = useState(text);

  const [currEditableItem, setCurrEditableItem] = useState("");
  const textAreaHandleChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <>
      {currEditableItem === event.key ? (
        <div style={{ width: "100%" }}>
          <TextArea
            rows={2}
            placeholder={text}
            value={textAreaValue}
            onChange={textAreaHandleChange}
          />
          <div style={{ display: "flex", paddingTop: 5, alignItems: "center" }}>
            <button
              className={classes.saveButton}
              onClick={(e) => {
                setData(
                  dataSource.map((item) => {
                    if (item.key === currEditableItem) {
                      return {
                        ...item,
                        description: textAreaValue,
                      };
                    }
                    return item;
                  })
                );
                setCurrEditableItem(-1);
              }}
            >
              Save
            </button>

            <CloseOutlined
              onClick={() => {
                setCurrEditableItem(-1);
                setTextAreaValue(text);
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <span>{text}</span>
          <div>
            <button
              type="primary"
              style={{
                height: 25,
              }}
              onClick={() => {
                setCurrEditableItem(event.key);
              }}
            >
              Edit
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default EditableDescription;

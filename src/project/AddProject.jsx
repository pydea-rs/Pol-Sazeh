import React, { useContext } from "react";
import MainContext from "../containers/MainContext";

const AddNewTask = () => {
    const context = useContext(MainContext);

    return (
        <div className="w-50 mx-auto fixed-bottom mb-5 p-3 wrapper">
            <form
                className="form-inline justify-content-center"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="input-group w-100">
                    <input
                        type="text"
                        className="form-control rounded"
                        placeholder="اضافه کردن پروژه جدید"
                        value={context.todo}
                        onChange={context.handleTodoInput}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddNewTask;

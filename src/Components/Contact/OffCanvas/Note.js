import React from "react";
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdCancel } from 'react-icons/md';
import { HiPlus } from 'react-icons/hi';
import profilePic3 from "../../Images/Profile/pro-icon.png";

const Note = () => {
  return (
    <div className="ms-3 mt-3">
      <div>
        <button className="add-new-button px-2 py-1">
          <HiPlus />
          Add New Note
        </button>
        <div class="form-floating mt-2">
          <form>
            <textarea
              class="form-control rounded"
              placeholder="Leave your Note here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>

            <div className="mt-3">
              <button className="add-new-button px-2 py-1 bg-success">
                <HiPlus />
                Add
              </button>

              <button className="add-new-button px-2 py-1 ms-2 bg-danger">
                <MdCancel className="me-1 mb-1" />
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="border p-4 rounded mt-4">
            <div className="note-upper-part">
              <div className="d-flex gap-3 step-content">
                <div>
                  <img
                    className=""
                    style={{
                      width: "40px",
                      height: "42px",
                      borderRadius: "50%",
                    }}
                    src={profilePic3}
                    alt=""
                  />
                </div>
                <div className="step-sub-content">
                  <p className="fw-semibold">admin@admin.com</p>
                  <small>
                    08/08/2022 <GoPrimitiveDot /> 8.05pm
                  </small>
                </div>
              </div>

              <div class="dropdown">
                <button
                  class="note-option-button"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiDotsVertical className="fs-5" />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="{#}">
                      <FaEdit className="mb-1 me-1" /> Edit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="{#}">
                      {" "}
                      <MdDelete className="mb-1 me-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="note-lower-part">
              <p className="mt-4">
                By combining state of the art artificial intelligence & ClipDrop
                provides a unique, continuous workflow that.... ClipDrop
                provides a unique, continuous workflow that.... ClipDrop
                provides a unique, continuous workflow that....
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border p-4 rounded mt-4">
            <div className="note-upper-part">
              <div className="d-flex gap-3 step-content">
                <div>
                  <img
                    className=""
                    style={{
                      width: "40px",
                      height: "42px",
                      borderRadius: "50%",
                    }}
                    src={profilePic3}
                    alt=""
                  />
                </div>
                <div className="step-sub-content">
                  <p className="fw-semibold">admin@admin.com</p>
                  <small>
                    08/08/2022 <GoPrimitiveDot /> 8.05pm
                  </small>
                </div>
              </div>

              <div class="dropdown">
                <button
                  class="note-option-button"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiDotsVertical className="fs-5" />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="{#}">
                      <FaEdit className="mb-1 me-1" /> Edit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="{#}">
                      {" "}
                      <MdDelete className="mb-1 me-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="note-lower-part">
              <p className="mt-4">
                By combining state of the art artificial intelligence & ClipDrop
                provides a unique, continuous workflow that.... ClipDrop
                provides a unique, continuous workflow that.... ClipDrop
                provides a unique, continuous workflow that....
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border p-4 rounded mt-4">
            <div className="note-upper-part">
              <div className="d-flex gap-3 step-content">
                <div>
                  <img
                    className=""
                    style={{
                      width: "40px",
                      height: "42px",
                      borderRadius: "50%",
                    }}
                    src={profilePic3}
                    alt=""
                  />
                </div>
                <div className="step-sub-content">
                  <p className="fw-semibold">admin@admin.com</p>
                  <small>
                    08/08/2022 <GoPrimitiveDot /> 8.05pm
                  </small>
                </div>
              </div>

              <div class="dropdown">
                <button
                  class="note-option-button"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiDotsVertical className="fs-5" />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="{#}">
                      <FaEdit className="mb-1 me-1" /> Edit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="{#}">
                      {" "}
                      <MdDelete className="mb-1 me-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="note-lower-part">
              <p className="mt-4">
                By combining state of the art artificial intelligence & ClipDrop
                provides a unique, continuous workflow that.... ClipDrop
                provides a unique, continuous workflow that.... ClipDrop
                provides a unique, continuous workflow that....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;

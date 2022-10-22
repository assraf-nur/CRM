import React from "react";

const AddPapers = () => {
  return (
    <div className="ms-3 mt-3">
      <form>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Driving"
          />
          <label class="form-check-label" for="Driving">
            Driving License or Passport, Green card (Front and Back)
          </label>
        </div>
        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Equipments"
          />
          <label class="form-check-label" for="Equipments">
            Equipments/Vehicles Purchase Order
          </label>
        </div>
        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Letter"
          />
          <label class="form-check-label" for="Letter">
            IRS Letter With EIN No
          </label>
        </div>
        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Statements"
          />
          <label class="form-check-label" for="Statements">
            Two Years Profit and Loss Statements
          </label>
        </div>
        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Profit"
          />
          <label class="form-check-label" for="Profit">
            Year-To-Date Profit and Loss Statement
          </label>
        </div>
        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Application"
          />
          <label class="form-check-label" for="Application">
            Equipment Lease Application
          </label>
        </div>
        <div class="form-check mt-3">
          <input class="form-check-input" type="checkbox" value="" id="Bank" />
          <label class="form-check-label" for="Bank">
            3 Months Business Bank Statement
          </label>
        </div>
        <div class="form-check mt-3">
          <input class="form-check-input" type="checkbox" value="" id="List" />
          <label class="form-check-label" for="List">
            Equipment List
          </label>
        </div>
        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Ownership"
          />
          <label class="form-check-label" for="Ownership">
            Company Articles or Proof or Ownership
          </label>
        </div>
        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Passport"
          />
          <label class="form-check-label" for="Passport">
            Work permit, Green Card and / or Passport (Valid for 6 month)
          </label>
        </div>
        <div class="form-check mt-3">
          <input class="form-check-input" type="checkbox" value="" id="Void" />
          <label class="form-check-label" for="Void">
            Void Check
          </label>
        </div>
        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Business"
          />
          <label class="form-check-label" for="Business">
            Complete Business Application
          </label>
        </div>
        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Financial"
          />
          <label class="form-check-label" for="Financial">
            Complete Personal Financial Statement
          </label>
        </div>

        <button className="add-new-button px-2 py-1 bg-info mt-3">
          Assign Papers
        </button>
      </form>
    </div>
  );
};

export default AddPapers;

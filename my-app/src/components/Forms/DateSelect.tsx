import { Controller } from "react-hook-form"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function DateSelect({name, accessName, control, errors}) {
    return (
      <Controller
        name={accessName}
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <div className={accessName + " form-group"}>
            <div className="fields">
              <label htmlFor="birthDate">{name}</label>
              <DatePicker
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                dateFormat="MM/dd/yyyy"
                id={accessName}
                // required
                // aria-invalid={errors.birthDate ? "true" : "false"}
              />
            </div>
            {errors && (
              <div className="form-error">{errors.message}</div>
            )}
          </div>
        )}
      />
    )
  }
  
  export default DateSelect
  


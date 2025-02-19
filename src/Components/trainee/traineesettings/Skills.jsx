import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  Chip,
  InputLabel,
  FormControl,
  Box,
  Button,
} from "@mui/material";

const SkillSelector = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Track if it's in editing mode
  const allSkills = ["JavaScript", "Python", "Java", "C++", "Ruby"];

  const handleChange = (event) => {
    setSelectedSkills(event.target.value);
  };

  const handleDelete = (skillToDelete) => () => {
    setSelectedSkills((skills) =>
      skills.filter((skill) => skill !== skillToDelete)
    );
  };

  const themesBackGroundColor = [
    { value: "light", colorClass: "bg-light-theme" },
    { value: "dark", colorClass: "bg-dark-theme" },
    { value: "grey-light", colorClass: "bg-[#494949] text-white" },
    { value: "teal", colorClass: "bg-[#007b7f] text-white" },
    { value: "orange", colorClass: "bg-[#cc5500] text-white" },
    { value: "purple", colorClass: "bg-[#752d5c] text-white" },
    { value: "dark-blue", colorClass: "bg-[#0451bd] text-white" },
    { value: "charcoal", colorClass: "bg-[#2e2e2e] text-white" },
    { value: "aqua", colorClass: "bg-[#00a6a6] text-white" },
    { value: "deep-red", colorClass: "bg-[#a32638] text-white" },
  ];
  const [themeBg, setThemeBg] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const selectedTheme = themesBackGroundColor.find(
      (t) => t.value === themeBg
    );
    if (selectedTheme) {
      document.body.className = selectedTheme.colorClass;
    }
  }, [themeBg]);

  const toggleEditing = () => {
    if (isEditing) {
      // Save the skills when switching back to saved state
      localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
    }
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center justify-center rounded-lg min-h-screen bg-[#000000] bg-opacity-20">
        <div className="space-y-11">
          <div>
            <FormControl fullWidth>
              <InputLabel style={{ color: "white" }} id="skill-select-label">
                Select Skills
              </InputLabel>
              <Select
                style={{ color: "white" }}
                className="w-96"
                labelId="skill-select-label"
                id="skill-select"
                multiple
                value={selectedSkills}
                onChange={handleChange}
                MenuProps={{
                  PaperProps: {
                    onMouseDown: (e) => e.preventDefault(),
                  },
                }}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {/* {selected.map((skill) => (
                      <Chip
                        style={{ color: "white" }}
                        className={`${
                          themesBackGroundColor.find((t) => t.value === themeBg)
                            ?.colorClass || ""
                        }`}
                        key={skill}
                        label={skill}
                      />
                    ))} */}
                  </Box>
                )}
                disabled={!isEditing} // Disable select dropdown if not in edit mode
              >
                {allSkills.map((skill) => (
                  <MenuItem
                    className={`${
                      themesBackGroundColor.find((t) => t.value === themeBg)
                        ?.colorClass || ""
                    }`}
                    key={skill}
                    value={skill}
                  >
                    {skill}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div>
            <Box style={{ color: "white" }} sx={{ marginTop: 2 }}>
              {selectedSkills.length > 0 && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selectedSkills.map((skill) => (
                    <Chip
                      style={{ color: "white" }}
                      className={`${
                        themesBackGroundColor.find((t) => t.value === themeBg)
                          ?.colorClass || ""
                      }`}
                      key={skill}
                      label={skill}
                      onDelete={handleDelete(skill)}
                    />
                  ))}
                </Box>
              )}
            </Box>
          </div>

          <div className=" justify-center items-center flex">
            <Button
              variant="contained"
              onClick={toggleEditing}
              color={isEditing ? "primary" : "primary"}
            >
              {isEditing ? "Save Skills" : "Update Skills"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSelector;

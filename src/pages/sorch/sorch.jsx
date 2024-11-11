import { Stack, TextField } from "@mui/material";
import React from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useSearchStore } from "../../store/useSorch";

export const Sorch = () => {
  const [input, setInput] = React.useState("");
  const debounceValue = useDebounce(input);
  const { data, isLoading } = useSearchStore(debounceValue);

  return (
    <Stack p="30px" position="relative">
      <TextField value={input} onChange={(e) => setInput(e.target.value)} />
      {!isLoading && (
        <Stack boxShadow="0px 0px 99px -9px rgba(161,137,161,1)">
          {data?.map((item) => (
            <Stack
              direction="row"
              alignItems="center"
              p="20px"
              border="1px solid grey"
              key={`phone-${item.id}`}
            >
              <img style={{ width: "150px" }} src={item.img} alt={item.title} />
              <h3>{item.name}</h3>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

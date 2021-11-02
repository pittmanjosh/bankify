import { useContext } from "react";
import ctx from "../context"

export default function useUser() {
  return useContext(ctx).user; 
}
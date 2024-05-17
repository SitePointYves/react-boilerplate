'use client';

import { getMitarbeiterAction } from "@/store/mitarbeiter/MitarbeiterSlice";
import { MitarbeiterStateType } from "@/store/mitarbeiter/MitarbeiterType";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {

    const { data, isLoading } = useSelector((state: MitarbeiterStateType) => state.mitarbeiter);

    const id =  "1";
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMitarbeiterAction(id));
    }, [dispatch, id]);

    return  (
        <div>
          {
            isLoading
            ?
            (<span>Loading...</span>)
            :
            data
              ?
              (<div>Hi, I am {data.name}</div>)
              :
              (<span>No user found!</span>)
          }
        </div>
      )
}
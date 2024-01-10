import { Dialog, DialogBody } from "@material-tailwind/react";
import { CgCloseO } from "react-icons/cg";
import UpdateFood from "../../Pages/User/UpdateFood";

const UpdateFoodDialogue = ({isOpen, food, setOpen, index, refetch}) => {
    console.log(food);
    return (
        <Dialog open={isOpen === index} className="max-h-[85vh] overflow-x-hidden rounded-lg">
                                    <DialogBody>
                                        <div className="flex justify-end">
                                            <CgCloseO className="w-8 h-8 text-red-500" onClick={()=>setOpen(null)}></CgCloseO>
                                        </div>
                                        <UpdateFood id={food?._id} foodData={food} setOpen={setOpen} refetch={refetch}></UpdateFood>
                                    </DialogBody>
                                </Dialog>
    );
};

export default UpdateFoodDialogue;
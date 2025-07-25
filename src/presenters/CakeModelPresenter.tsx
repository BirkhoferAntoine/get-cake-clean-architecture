'use client'

import {type FC} from "react";
import CakeModelView from "@/views/cakeModel/CakeModelView";
import dynamic from "next/dynamic";

type CakeModelPresenterProps = {
    folder: string;
};

const CakeDynamicImport = (folder: string) =>
    dynamic(
        () => import(`@/views/models/${folder}/Model`).then((mod) => mod.default),
        {
            ssr: false,
            loading: () => null,
        }
    );

const CakeModelPresenter: FC<CakeModelPresenterProps> = ({folder}) => {
    const Cake = CakeDynamicImport(folder)

    return <CakeModelView Cake={Cake}/>;
};

export default CakeModelPresenter;
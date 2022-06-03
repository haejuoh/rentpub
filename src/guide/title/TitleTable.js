import React from "react";
// SkrComponents
import SkrTypography from "../../components/skr/SkrTypography";
import SkrGrid from "./../../components/skr/SkrGrid";
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
// Title Components
import TitleTable from "../../components/customed/title/table/TitleTable";
// Guide
import { CodeBox } from "../../assets/style/guideStyle";
import { ExcelIcon } from "../../assets/style/icons";

const tableTitleData = {
  title: "고객정보",
  desc: "12,340",
};

const TitleTableDefault = () => {
  return (
    <>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleTable titleData={tableTitleData}>
            <SkrButton color="excel" variant="outlined" endIcon={<ExcelIcon />}>
              엑셀다운로드
            </SkrButton>
          </TitleTable>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const tableTitleData = {
      title: "고객정보",
      desc: {
        isShow: true,
        content: "12,340",
      },
    };
    <TableTitle titleData={tableTitleData}>
      <SkrGrid color="excel" variant="outlined" endIcon={<IconExcel />}>엑셀다운로드</SkrGrid>
    </TableTitle>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};

export default TitleTableDefault;

import { TableHead } from "@mui/material";
import React from "react";
import TitleSub from "../../../components/customed/title/sub/TitleSub";
import SkrDivider from "../../../components/skr/SkrDivider";
import SkrGrid from "../../../components/skr/SkrGrid";
import { Section } from "../../../components/customed/layout/Section";
import SkrBox from "../../../components/skr/SkrBox";
import SkrTable from "./../../../components/skr/SkrTable";
import SkrTableHead from "../../../components/skr/SkrTableHead";
import SkrTableBody from "../../../components/skr/SkrTableBody";
import SkrTableRow from "../../../components/skr/SkrTableRow";
import SkrTableCell from "../../../components/skr/SkrTableCell";
import InputLabelHidden from "./../../../components/customed/form/input/InputLabelHidden";
import SkrInputAdornment from "../../../components/skr/SkrInputAdornment";
import SkrTypography from "../../../components/skr/SkrTypography";
const TitleTable1 = {
  title: "대여료",
  desc: "",
  toggle: false,
  tooltip: false,
};
const TitleTable2 = {
  title: "자차면책제도요금",
  desc: "",
  toggle: false,
  tooltip: false,
};

const Table = () => {
  return (
    <Section>
      <SkrGrid container columnSpacing={20}>
        <SkrGrid item xs={6}>
          <TitleSub titleData={TitleTable1} />
          <SkrDivider variant="section15" />
          <SkrTable>
            <SkrTableHead>
              <SkrTableRow>
                <SkrTableCell width="33.3%"></SkrTableCell>
                <SkrTableCell width="33.3%">구분</SkrTableCell>
                <SkrTableCell width="33.3%">금액</SkrTableCell>
              </SkrTableRow>
            </SkrTableHead>
            <SkrTableBody>
              <SkrTableRow>
                <SkrTableCell>
                  <SkrTypography variant="b1">정상대여료</SkrTypography>
                </SkrTableCell>
                <SkrTableCell></SkrTableCell>
                <SkrTableCell>
                  <InputLabelHidden
                    placeholder="Placeholder"
                    defaultValue="350,000"
                    InputProps={{
                      endAdornment: (
                        <SkrInputAdornment position="end">원</SkrInputAdornment>
                      ),
                    }}
                  />
                </SkrTableCell>
              </SkrTableRow>
              <SkrTableRow>
                <SkrTableCell>
                  <SkrTypography variant="b1">정상대여료</SkrTypography>
                </SkrTableCell>
                <SkrTableCell>
                  <SkrTypography variant="b1">최대할인금액</SkrTypography>
                </SkrTableCell>

                <SkrTableCell>
                  <InputLabelHidden
                    placeholder="Placeholder"
                    defaultValue="50,000"
                    InputProps={{
                      endAdornment: (
                        <SkrInputAdornment position="end">원</SkrInputAdornment>
                      ),
                    }}
                  />
                </SkrTableCell>
              </SkrTableRow>
              <SkrTableRow>
                <SkrTableCell>
                  <SkrTypography variant="b1">정상대여료</SkrTypography>
                </SkrTableCell>
                <SkrTableCell>
                  <SkrTypography variant="b1">최소대여금액</SkrTypography>
                </SkrTableCell>

                <SkrTableCell>
                  <InputLabelHidden
                    placeholder="Placeholder"
                    defaultValue="200,000"
                    InputProps={{
                      endAdornment: (
                        <SkrInputAdornment position="end">원</SkrInputAdornment>
                      ),
                    }}
                  />
                </SkrTableCell>
              </SkrTableRow>
            </SkrTableBody>
          </SkrTable>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <TitleSub titleData={TitleTable2} />
          <SkrDivider variant="section15" />
          <SkrTable>
            <SkrTableHead>
              <SkrTableRow>
                <SkrTableCell width="50%">구분</SkrTableCell>
                <SkrTableCell width="50%">금액</SkrTableCell>
              </SkrTableRow>
            </SkrTableHead>
            <SkrTableBody>
              <SkrTableRow>
                <SkrTableCell>
                  <SkrTypography variant="b1">일반자차</SkrTypography>
                </SkrTableCell>
                <SkrTableCell>
                  <InputLabelHidden
                    placeholder="Placeholder"
                    defaultValue="25,000"
                    InputProps={{
                      endAdornment: (
                        <SkrInputAdornment position="end">원</SkrInputAdornment>
                      ),
                    }}
                  />
                </SkrTableCell>
              </SkrTableRow>
              <SkrTableRow>
                <SkrTableCell>
                  <SkrTypography variant="b1">플러스자차</SkrTypography>
                </SkrTableCell>

                <SkrTableCell>
                  <InputLabelHidden
                    placeholder="Placeholder"
                    defaultValue="350,000"
                    InputProps={{
                      endAdornment: (
                        <SkrInputAdornment position="end">원</SkrInputAdornment>
                      ),
                    }}
                  />
                </SkrTableCell>
              </SkrTableRow>
              <SkrTableRow>
                <SkrTableCell>
                  <SkrTypography variant="b1">슈퍼자차</SkrTypography>
                </SkrTableCell>

                <SkrTableCell>
                  <InputLabelHidden
                    placeholder="Placeholder"
                    defaultValue="40,500"
                    InputProps={{
                      endAdornment: (
                        <SkrInputAdornment position="end">원</SkrInputAdornment>
                      ),
                    }}
                  />
                </SkrTableCell>
              </SkrTableRow>
              <SkrTableRow>
                <SkrTableCell>
                  <SkrTypography variant="b1">완전자차</SkrTypography>
                </SkrTableCell>

                <SkrTableCell>
                  <InputLabelHidden
                    placeholder="Placeholder"
                    defaultValue="70,000"
                    InputProps={{
                      endAdornment: (
                        <SkrInputAdornment position="end">원</SkrInputAdornment>
                      ),
                    }}
                  />
                </SkrTableCell>
              </SkrTableRow>
            </SkrTableBody>
          </SkrTable>
        </SkrGrid>
      </SkrGrid>
    </Section>
  );
};

export default Table;

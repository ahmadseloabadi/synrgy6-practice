import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
export default function Faq() {
  return (
    <section className="FAQ mt-[100px] mx-[136px] grid grid-cols-2">
      <div>
        <h2 className="medium-header">Frequently Asked Question</h2>
        <p className="primary-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div>
        <Accordion collapseAll className=" flex flex-col  border-0 ">
          <AccordionPanel>
            <AccordionTitle className=" !border rounded-[4px] h-[56px] text-black primary-copy">
              Apa saja syarat yang dibutuhkan?
            </AccordionTitle>
            <AccordionContent className="  !border rounded-[4px] ">
              <p className="mb-2 text-black primary-copy">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                magni. Nesciunt commodi sint suscipit, ea aspernatur dolorem in
                officiis. Aliquam porro numquam commodi veniam neque non
                distinctio accusamus aut temporibus.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className=" !border rounded-[4px] h-[56px] mt-4 text-black primary-copy">
              Berapa hari minimal sewa mobil lepas kunci?
            </AccordionTitle>
            <AccordionContent className="  !border rounded-[4px] ">
              <p className="mb-2 text-black primary-copy">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                magni. Nesciunt commodi sint suscipit, ea aspernatur dolorem in
                officiis. Aliquam porro numquam commodi veniam neque non
                distinctio accusamus aut temporibus.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className=" !border rounded-[4px] h-[56px] mt-4 text-black primary-copy ">
              Berapa hari minimal sewa mobil lepas kunci?
            </AccordionTitle>
            <AccordionContent className="  !border rounded-[4px] ">
              <p className="mb-2 text-black primary-copy">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                magni. Nesciunt commodi sint suscipit, ea aspernatur dolorem in
                officiis. Aliquam porro numquam commodi veniam neque non
                distinctio accusamus aut temporibus.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className=" !border rounded-[4px] h-[56px] mt-4 text-black primary-copy ">
              Apakah Ada biaya antar-jemput?
            </AccordionTitle>
            <AccordionContent className="  !border rounded-[4px] ">
              <p className="mb-2 text-black primary-copy">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                magni. Nesciunt commodi sint suscipit, ea aspernatur dolorem in
                officiis. Aliquam porro numquam commodi veniam neque non
                distinctio accusamus aut temporibus.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className=" !border rounded-[4px] h-[56px] mt-4 text-black !primary-copy ">
              Bagaimana jika terjadi kecelakaan
            </AccordionTitle>
            <AccordionContent className="  !border rounded-[4px] ">
              <p className="mb-2 text-black primary-copy">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                magni. Nesciunt commodi sint suscipit, ea aspernatur dolorem in
                officiis. Aliquam porro numquam commodi veniam neque non
                distinctio accusamus aut temporibus.
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </section>
  );
}

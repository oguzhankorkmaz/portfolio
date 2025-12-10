import { LinkedinFilled } from "@ant-design/icons";
import { Divider } from "antd";
import { Be, CallCalling, Dribbble, Sms, Whatsapp } from "iconsax-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section id="contact" className="mt-50">
      <div className="text-lg text-center">
        I hope you know who the UI/UX designer you're looking for is now.
      </div>
      <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
        <div className="p-6 bg-black rounded-md flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href={"tel:+905546698240"} target="_blank">
              <CallCalling color="#F6F8FF" size={24} variant="Bulk" />
            </Link>
            <Divider
              type="vertical"
              style={{ borderColor: "gray" }}
              className="text-md m-0"
            />
            <Link href="https://wa.me/905546698240" target="_blank">
              <Whatsapp color="#F6F8FF" size={24} variant="Bulk" />
            </Link>
          </div>
          <div className="text-gray">+90 554 669 8240</div>
        </div>
        <Link
          href="mailto:oguzhannkorkmaz@gmail.com"
          target="_blank"
          className="p-6 bg-black rounded-md flex items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <Sms color="#F6F8FF" size={24} variant="Bulk" />
          </div>
          <div className="text-gray">oguzhannkorkmaz@gmail.com</div>
        </Link>
      </div>
      <Divider />
      <div className="flex items-center justify-center flex-wrap gap-6">
        <Link
          href={"https://www.linkedin.com/in/oguzhan-korkmaz/"}
          target="_blank"
          className="bg-gray py-3 px-3 rounded-md flex items-center gap-2 relative hover:bg-black25 transition-all"
        >
          <LinkedinFilled className="text-md" />
          <div>/oguzhan-korkmaz</div>
        </Link>
        <Link
          href={"https://dribbble.com/oguzhanzz_"}
          target="_blank"
          className="bg-gray py-3 px-3 rounded-md flex items-center gap-2 relative hover:bg-black25 transition-all"
        >
          <Dribbble color="#1b1e31" size={24} variant="Bulk" />
          <div>/oguzhanzz_</div>
        </Link>
        <Link
          href={"https://www.behance.net/oguzhankorkmaz"}
          target="_blank"
          className="bg-gray py-3 px-3 rounded-md flex items-center gap-2 relative hover:bg-black25 transition-all"
        >
          <Be color="#1b1e31" size={24} variant="Bulk" />
          <div>/oguzhankorkmaz</div>
        </Link>
      </div>
    </section>
  );
}

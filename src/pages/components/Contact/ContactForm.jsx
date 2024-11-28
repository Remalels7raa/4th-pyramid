import { useForm } from "react-hook-form";
import { useState } from "react";
import { User, Mail, PhoneCall, Send } from "lucide-react"; // استيراد الأيقونات من lucide-react
import { Input } from "@/components/Ui/input";
import { Button } from "@/components/Ui/button";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [isSending, setIsSending] = useState(false);

  // إعداد وظيفة الإرسال عبر EmailJS
  const sendEmail = (data) => {
    setIsSending(true);

    emailjs
      .send(
        "service_qmryda7", // ضع معرف الخدمة هنا
        "template_61k2gvk", // ضع معرف القالب هنا
        {
          username: data.username,
          userEmail: data.userEmail,
          userPhone: data.userPhone,
          userMessage: data.userMessage,
        },
        "9fTFC1g4Y4Qx05K6m" // ضع معرف المستخدم هنا
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setIsSending(false);
        reset(); // إعادة تعيين الحقول لتفريغ الفورم بعد الإرسال
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setIsSending(false);
      });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(sendEmail)}>
      {/* اسم المستخدم */}
      <div className="form-item">
        <Input
          className="border-2 shadow-md hover:shadow-lg placeholder:text-gray-600 text-gray-900 border-gray-200 focus:border-white focus:ring-0 p-2  pr-10 transition-all duration-200"
          type="text"
          placeholder="اسم المستخدم"
          endIcon={User} // إضافة أيقونة المستخدم
          {...register("username", { required: "اسم المستخدم مطلوب" })}
        />
        {errors.username && (
          <div className="bg-red-100 py-3 rounded-5  text-sm lg:text-md mt-1 ">
            <span className="text-red-500 px-4  text-sm">
              {errors.username.message}
            </span>
          </div>
        )}
      </div>
      {/* البريد الإلكتروني */}
      <div className="form-item">
        <Input
          className="border-2  shadow-md hover:shadow-lg placeholder:text-gray-600 text-gray-900 border-gray-200 focus:border-white focus:ring-0 p-2  pr-10 transition-all duration-200"
          type="email"
          placeholder="البريد الإلكتروني"
          endIcon={Mail} // إضافة أيقونة البريد الإلكتروني
          {...register("userEmail", {
            required: "البريد الإلكتروني مطلوب",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "صيغة البريد الإلكتروني غير صحيحة",
            },
          })}
        />
        {errors.userEmail && (
          <div className="bg-red-100 py-3 rounded-5  text-sm lg:text-md mt-1 ">
            <span className=" px-4  w-full  text-red-500 ">
              {errors.userEmail.message}
            </span>
          </div>
        )}
      </div>
      {/* رقم الهاتف */}
      <div className="form-item">
        <Input
          className="border-2 shadow-lg hover:shadow-xl placeholder:text-gray-600 text-gray-900 border-gray-200 focus:border-white focus:ring-0 p-2  pr-10 transition-all duration-200 text-right"
          type="tel"
          placeholder="رقم الهاتف"
          endIcon={PhoneCall} // إضافة أيقونة الهاتف
          {...register("userPhone", {
            required: "رقم الهاتف مطلوب",
            pattern: {
              value: /^[0-9]+$/,
              message: "رقم الهاتف يجب أن يحتوي على أرقام فقط",
            },
          })}
        />
        {errors.userPhone && (
          <div className="bg-red-100 py-3 rounded-5  text-sm lg:text-md mt-1 ">
            <span className="text-red-500 px-4  text-sm">
              {errors.userPhone.message}
            </span>
          </div>
        )}
      </div>
      {/* الرسالة */}
      <div className="form-item">
        <textarea
          placeholder="اكتب رسالتك هنا"
          {...register("userMessage", { required: "الرسالة مطلوبة" })}
          className="w-full h-24  border border-gray-300 bg-gray-200 py-3 px-4 text-md placeholder-gray-500 focus:border-blue-400 focus:ring-0 shadow-sm hover:shadow-md transition-all duration-200"
        />
        {errors.userMessage && (
          <div className="bg-red-100 py-3 rounded-5  text-sm lg:text-md mt-1 ">
            <span className="text-red-500 px-4 text-sm">
              {errors.userMessage.message}
            </span>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          className="btn w-full rounded-5 sm:w-1/2 md:w-1/2 lg:w-1/3 h-14  Amiri-font font-bold text-md sm:text-lg md:text-md lg:text-xl text-gray-50 border-sky-400 bg-cyan-600 hover:bg-cyan-700 hover:text-white transition-all duration-200 px-6 py-2 shadow-md shadow-black"
          disabled={isSubmitting || isSending}>
          {isSending ? "جاري الإرسال..." : "ارسال البيانات"}
          <Send />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

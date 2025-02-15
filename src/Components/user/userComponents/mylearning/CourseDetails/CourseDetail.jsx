import CourseVideoList from "./CourseVideoList";

export default function CourseDetail({ course, onBack }) {
  return (
    <>
      <div className="p-6">
        <button
          onClick={onBack}
          className="mb-4 px-4 py-2 bg-gray-300 rounded-md"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold">{course.name} Course</h1>
        <p className="text-gray-600 mt-2">Progress: {course.progress}%</p>
        <div className="w-full bg-gray-200 h-4 rounded-full mt-3">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
      <div>
        <CourseVideoList />
      </div>
    </>
  );
}

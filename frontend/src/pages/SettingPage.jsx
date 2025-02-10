import { Send } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="container mx-auto min-h-screen max-w-5xl p-4 pt-20">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-base-content/70 text-sm">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
          {THEMES.map((value) => (
            <button
              key={value}
              className={`group flex flex-col items-center gap-1.5 rounded-lg p-2 transition-colors ${theme === value ? "bg-base-200" : "hover:bg-base-200/50"} `}
              onClick={() => setTheme(value)}
            >
              <div
                className="relative h-8 w-full overflow-hidden rounded-md"
                data-theme={value}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="bg-primary rounded"></div>
                  <div className="bg-secondary rounded"></div>
                  <div className="bg-accent rounded"></div>
                  <div className="bg-neutral rounded"></div>
                </div>
              </div>
              <span className="w-full truncate text-center text-[11px] font-medium">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* PREVIEW SECTION */}
        <h3 className="mb-3 text-lg font-semibold">Preview</h3>
        <div className="border-base-300 bg-base-100 overflow-hidden rounded-xl border shadow-lg">
          <div className="bg-base-200 p-4">
            <div className="mx-auto max-w-lg">
              {/* Mock Chat UI */}
              <div className="bg-base-100 overflow-hidden rounded-xl shadow-sm">
                {/* Chat Header */}
                <div className="border-base-300 bg-base-100 border-b px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-primary-content flex h-8 w-8 items-center justify-center rounded-full font-medium">
                      J
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">John Doe</h3>
                      <p className="text-base-content/70 text-xs">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="bg-base-100 max-h-[200px] min-h-[200px] space-y-4 overflow-y-auto p-4">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl p-3 shadow-sm ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"} `}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`mt-1.5 text-[10px] ${message.isSent ? "text-primary-content/70" : "text-base-content/70"} `}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="border-base-300 bg-base-100 border-t p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered h-10 flex-1 text-sm"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary h-10 min-h-0">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

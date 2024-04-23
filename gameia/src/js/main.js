document.addEventListener("DOMContentLoaded", function () {
  // Your code here...

  const startDate = document.getElementById("start-date");
  const endDate = document.getElementById("end-date");
  const gameiaDuration = document.getElementById("gameia-duration");
  const membersCount = document.getElementById("members-count");
  const memeberAmount = document.getElementById("member-amount");
  const totalAmount = document.getElementById("total-amount");
  const membersList = document.getElementById("members-list");
  const addMember = function (number) {
    return `
    <div class="mb-5">
        <p class="mb-4">العضو رقم <span class="font-medium">${number}</span></p>
        <label
            for="name-${number}"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >الاسم</label
        >
        <input
            type="text"
            id="name-${number}"
            class="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
        />
        <label
            for="email-${number}"
            class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
            >البريد الالكتروني</label
        >
        <input
            type="email"
            id="email-${number}"
            class="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
        />
        <hr class="my-5" />
    </div>
    `;
  };

  startDate.value = new Date().toISOString().split("T")[0];
  // set it after 5 months
  endDate.value = new Date(new Date().setMonth(new Date().getMonth() + 5))
    .toISOString()
    .split("T")[0];
  gameiaDuration.innerText = 5;

  startDate.addEventListener("input", calculateDuration);
  endDate.addEventListener("input", calculateDuration);
  membersCount.addEventListener("input", insertMembers);
  membersCount.addEventListener("input", calculateTotalAmount);
  memeberAmount.addEventListener("input", calculateTotalAmount);

  function calculateDuration() {
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    const diff = end - start;
    const months = diff / (1000 * 60 * 60 * 24 * 30);

    gameiaDuration.innerText = Math.ceil(months);
  }

  function calculateTotalAmount() {
    const count = parseInt(membersCount.value);
    const amount = parseInt(memeberAmount.value);
    totalAmount.innerText = count * amount;
  }

  function insertMembers() {
    const count = parseInt(membersCount.value);
    if (count < 1) return;
    membersList.innerHTML = "";
    for (let i = 1; i <= count; i++) {
      membersList.innerHTML += addMember(i);
    }
  }
});

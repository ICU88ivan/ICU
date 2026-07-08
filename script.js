document.addEventListener('DOMContentLoaded', () => {
    // --- Данные о билетах (25 билетов) ---
    const tickets = [
        { id: 1, questions: ["Проведение генеральной уборки процедурного (перевязочного, манипуляционного) кабинета.", "Проведение гигиенической антисептики кожи рук.", "Подсчет пульса и определение его характеристик, регистрация в температурном листе."] },
        { id: 2, questions: ["Подготовка пациентов к инструментальным методам исследования.", "Проведение гигиенической антисептики кожи рук.", "Кормление пациентов с дефицитом самообслуживания (ложечкой и поильником)."] },
        { id: 3, questions: ["Приготовление рабочих растворов химических средств дезинфекции.", "Проведение гигиенической антисептики кожи рук.", "Подача кислорода через носовые канюли."] },
        { id: 4, questions: ["Проведение текущей уборки помещений организаций здравоохранения.", "Проведение гигиенической антисептики кожи рук.", "Постановка согревающего компресса."] },
        { id: 5, questions: ["Проведение дезинфекции изделий медицинского назначения.", "Проведение гигиенической антисептики кожи рук.", "Сбор мочи на различные исследования, оформление направлений."] },
        { id: 6, questions: ["Санитарная обработка пациента (полная и частичная).", "Проведение гигиенической антисептики кожи рук.", "Сбор кала на различные исследования, оформление направлений."] },
        { id: 7, questions: ["Осмотр пациента на педикулез, чесотку. Санитарная обработка при выявлении педикулеза.", "Проведение гигиенической антисептики кожи рук.", "Сбор мокроты на общий анализ, оформление направления."] },
        { id: 8, questions: ["Проведение антропометрических измерений пациента.", "Проведение гигиенической антисептики кожи рук.", "Подготовка пациентов к инструментальным методам исследования."] },
        { id: 9, questions: ["Транспортировка пациента.", "Проведение гигиенической антисептики кожи рук.", "Измерение температуры тела, регистрация в температурном листе."] },
        { id: 10, questions: ["Перемещение пациента с учетом правил биомеханики.", "Проведение гигиенической антисептики кожи рук.", "Измерение артериального давления и его оценка, регистрация в температурном листе."] },
        { id: 11, questions: ["Комплексная профилактика пролежней.", "Проведение гигиенической антисептики кожи рук.", "Применение пузыря со льдом (гелевого пакета)."] },
        { id: 12, questions: ["Туалет глаз, носа, наружного слухового прохода.", "Проведение гигиенической антисептики кожи рук.", "Измерение суточного диуреза и его регистрация, определение водного баланса."] },
        { id: 13, questions: ["Гигиенический уход за полостью рта.", "Проведение гигиенической антисептики кожи рук.", "Подсчет дыхательных движений, регистрация в температурном листе."] },
        { id: 14, questions: ["Уход за кожей, волосами, ногтями.", "Проведение гигиенической антисептики кожи рук.", "Проведение генеральной уборки процедурного (перевязочного, манипуляционного) кабинета."] },
        { id: 15, questions: ["Подача судна, мочеприемника.", "Проведение гигиенической антисептики кожи рук.", "Подсчет пульса и определение его характеристик, регистрация в температурном листе."] },
        { id: 16, questions: ["Подмывание пациента.", "Проведение гигиенической антисептики кожи рук.", "Кормление пациентов с дефицитом самообслуживания (ложечкой и поильником)."] },
        { id: 17, questions: ["Подготовка постели.", "Проведение гигиенической антисептики кожи рук.", "Приготовление рабочих растворов химических средств дезинфекции."] },
        { id: 18, questions: ["Смена нательного белья у пациента с нарушением двигательной активности.", "Проведение гигиенической антисептики кожи рук.", "Проведение текущей уборки помещений здравоохранения."] },
        { id: 19, questions: ["Смена постельного белья у пациента с нарушением двигательной активности.", "Проведение гигиенической антисептики кожи рук.", "Проведение дезинфекции изделий медицинского назначения."] },
        { id: 20, questions: ["Подача кислорода через носовые канюли.", "Проведение гигиенической антисептики кожи рук.", "Санитарная обработка пациента (полная и частичная)."] },
        { id: 21, questions: ["Постановка согревающего компресса.", "Проведение гигиенической антисептики кожи рук.", "Осмотр пациента на педикулез, чесотку. Санитарная обработка при выявлении педикулеза."] },
        { id: 22, questions: ["Сбор мочи на различные исследования, оформление направлений.", "Проведение гигиенической антисептики кожи рук.", "Проведение антропометрических измерений пациента."] },
        { id: 23, questions: ["Сбор кала на различные исследования, оформление направлений.", "Проведение гигиенической антисептики кожи рук.", "Транспортировка пациента."] },
        { id: 24, questions: ["Сбор мокроты на общий анализ, оформление направления.", "Проведение гигиенической антисептики кожи рук.", "Перемещение пациента с учетом правил биомеханики."] },
        { id: 25, questions: ["Комплексная профилактика пролежней.", "Проведение гигиенической антисептики кожи рук.", "Гигиенический уход за полостью рта."] }
    ];

    // --- DOM-элементы ---
    const form = document.getElementById('registrationForm');
    const ticketResultDiv = document.getElementById('ticketResult');
    const downloadBtn = document.getElementById('downloadList');
    const toggleBtn = document.getElementById('toggleList');
    const clearBtn = document.getElementById('clearList');
    const listWrapper = document.getElementById('registrationListWrapper');
    const registrationListDiv = document.getElementById('registrationList');

    // --- Вспомогательные функции ---
    const getRegistrations = () => JSON.parse(localStorage.getItem('registrations')) || [];
    const saveRegistrations = (data) => localStorage.setItem('registrations', JSON.stringify(data));

    // --- Отображение списка ---
    const displayRegistrations = () => {
        const registrations = getRegistrations();
        registrationListDiv.innerHTML = '';

        if (registrations.length === 0) {
            registrationListDiv.innerHTML = '<p style="color:#888;">Пока никто не зарегистрировался.</p>';
            return;
        }

        registrations.forEach((reg, index) => {
            const item = document.createElement('div');
            item.className = 'reg-item';
            item.id = `reg-${index}`;
            item.innerHTML = `
                <span class="info" id="info-${index}">
                    <strong>${index + 1}.</strong> ${reg.fullName} (Группа: ${reg.groupNumber}) — Билет №${reg.ticket.id}
                </span>
                <span class="actions" id="actions-${index}">
                    <button class="btn-sm btn-outline edit-btn" data-index="${index}">✏️</button>
                </span>
            `;
            registrationListDiv.appendChild(item);
        });

        // Навешиваем обработчики на все кнопки редактирования
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.target.dataset.index);
                enterEditMode(idx);
            });
        });
    };

    // --- Режим редактирования ---
    const enterEditMode = (index) => {
        const registrations = getRegistrations();
        const reg = registrations[index];
        const infoSpan = document.getElementById(`info-${index}`);
        const actionsSpan = document.getElementById(`actions-${index}`);

        // Заменяем текст на поля ввода
        infoSpan.innerHTML = `
            <strong>${index + 1}.</strong>
            <input type="text" class="edit-input" id="edit-name-${index}" value="${reg.fullName.replace(/"/g, '&quot;')}">
            Группа:
            <input type="text" class="edit-group-input" id="edit-group-${index}" value="${reg.groupNumber}">
            — Билет №${reg.ticket.id}
        `;

        // Меняем кнопки: сохранить и отмена
        actionsSpan.innerHTML = `
            <button class="btn-sm btn-green save-btn" data-index="${index}">💾</button>
            <button class="btn-sm btn-red cancel-btn" data-index="${index}">✖</button>
        `;

        // Обработчик сохранения
        document.querySelector(`.save-btn[data-index="${index}"]`).addEventListener('click', () => {
            const newName = document.getElementById(`edit-name-${index}`).value.trim();
            const newGroup = document.getElementById(`edit-group-${index}`).value.trim();

            if (!newName || !newGroup) {
                alert('ФИО и номер группы не могут быть пустыми.');
                return;
            }

            registrations[index].fullName = newName;
            registrations[index].groupNumber = newGroup;
            saveRegistrations(registrations);
            displayRegistrations();
        });

        // Обработчик отмены
        document.querySelector(`.cancel-btn[data-index="${index}"]`).addEventListener('click', () => {
            displayRegistrations();
        });

        // Фокус на поле ввода ФИО
        setTimeout(() => {
            const input = document.getElementById(`edit-name-${index}`);
            if (input) input.focus();
        }, 50);
    };

    // --- Переключение видимости списка ---
    let listVisible = false;
    toggleBtn.addEventListener('click', () => {
        listVisible = !listVisible;
        if (listVisible) {
            listWrapper.style.display = 'block';
            toggleBtn.textContent = '🙈 Скрыть список';
            displayRegistrations(); // обновить при показе
        } else {
            listWrapper.style.display = 'none';
            toggleBtn.textContent = '👁 Показать список';
        }
    });

    // --- Очистка списка ---
    clearBtn.addEventListener('click', () => {
        if (getRegistrations().length === 0) {
            alert('Список уже пуст.');
            return;
        }
        if (confirm('Вы уверены, что хотите полностью очистить список зарегистрированных студентов? Это действие нельзя отменить.')) {
            localStorage.removeItem('registrations');
            displayRegistrations();
            alert('Список очищен.');
        }
    });

    // --- Обработчик отправки формы (регистрация) ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const groupNumber = document.getElementById('groupNumber').value.trim();

        if (!fullName || !groupNumber) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        // Случайный билет
        const randomIndex = Math.floor(Math.random() * tickets.length);
        const assignedTicket = tickets[randomIndex];

        // Показываем билет
        ticketResultDiv.style.display = 'block';
        ticketResultDiv.innerHTML = `
            <h2>Ваш билет № ${assignedTicket.id}</h2>
            <ul>
                <li><strong>Вопрос 1:</strong> ${assignedTicket.questions[0]}</li>
                <li><strong>Вопрос 2:</strong> ${assignedTicket.questions[1]}</li>
                <li><strong>Вопрос 3:</strong> ${assignedTicket.questions[2]}</li>
            </ul>
        `;

        // Сохраняем в localStorage
        const registrations = getRegistrations();
        registrations.push({
            fullName: fullName,
            groupNumber: groupNumber,
            ticket: assignedTicket
        });
        saveRegistrations(registrations);

        // Обновляем список, если он виден
        if (listVisible) displayRegistrations();

        // Очищаем форму
        form.reset();
    });

    // --- Скачивание CSV (с BOM для корректной кириллицы в Excel) ---
    downloadBtn.addEventListener('click', () => {
        const registrations = getRegistrations();
        if (registrations.length === 0) {
            alert('Нет данных для скачивания.');
            return;
        }

        const headers = ["ФИО", "Номер группы", "Номер билета", "Вопрос 1", "Вопрос 2", "Вопрос 3"].join(';');

        const rows = registrations.map(reg => {
            const rowData = [
                reg.fullName,
                reg.groupNumber,
                reg.ticket.id,
                ...reg.ticket.questions
            ];
            return rowData.map(field => `"${String(field).replace(/"/g, '""')}"`).join(';');
        });

        // BOM (Byte Order Mark) в начале — чтобы Excel правильно открыл UTF-8
        const csvContent = '\uFEFF' + [headers, ...rows].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "list.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // --- Первоначальная загрузка (список скрыт) ---
    // Ничего не показываем, ждём нажатия кнопки «Показать список»
});

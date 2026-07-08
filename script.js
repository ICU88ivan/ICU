// Ждем, пока весь HTML-документ будет готов
document.addEventListener('DOMContentLoaded', () => {

    // --- Данные о билетах (не изменились) ---
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

    // --- Находим все нужные элементы на странице ---
    const elements = {
        form: document.getElementById('registrationForm'),
        ticketResultDiv: document.getElementById('ticketResult'),
        downloadBtn: document.getElementById('downloadList'),
        toggleBtn: document.getElementById('toggleList'),
        clearBtn: document.getElementById('clearList'),
        listWrapper: document.getElementById('registrationListWrapper'),
        registrationListDiv: document.getElementById('registrationList')
    };

    // --- Функции для работы с localStorage ---
    const getRegistrations = () => JSON.parse(localStorage.getItem('registrations')) || [];
    const saveRegistrations = (data) => localStorage.setItem('registrations', JSON.stringify(data));

    // --- Главная функция для отрисовки списка ---
    function renderList() {
        const registrations = getRegistrations();
        elements.registrationListDiv.innerHTML = '';

        if (registrations.length === 0) {
            elements.registrationListDiv.innerHTML = '<p style="color:#888; text-align:center;">Список пуст.</p>';
            return;
        }

        registrations.forEach((reg, index) => {
            const item = document.createElement('div');
            item.className = 'reg-item';
            // **ИЗМЕНЕНИЕ**: Добавлена кнопка удаления
            item.innerHTML = `
                <span class="info">
                    <strong>${index + 1}.</strong> ${reg.fullName} (Группа: ${reg.groupNumber}) — Билет №${reg.ticket.id}
                </span>
                <span class="actions">
                    <button class="btn-sm btn-outline edit-btn" title="Редактировать">✏️</button>
                    <button class="btn-sm btn-red delete-btn" title="Удалить">🗑️</button>
                </span>
            `;
            elements.registrationListDiv.appendChild(item);
        });
    }

    // --- Функция для входа в режим редактирования ---
    function enableEditMode(item, index) {
        const registrations = getRegistrations();
        const reg = registrations[index];

        item.innerHTML = `
            <span class="info">
                <strong>${index + 1}.</strong>
                <input type="text" class="edit-input" value="${reg.fullName.replace(/"/g, '&quot;')}">
                Группа:
                <input type="text" class="edit-group-input" value="${reg.groupNumber}">
                — Билет №${reg.ticket.id}
            </span>
            <span class="actions">
                <button class="btn-sm btn-green save-btn" title="Сохранить">💾</button>
                <button class="btn-sm btn-red cancel-btn" title="Отмена">✖</button>
            </span>
        `;
        const input = item.querySelector('.edit-input');
        if(input) input.focus();
    }

    // --- Установка обработчиков событий ---

    // 1. Показать / Скрыть список
    if (elements.toggleBtn) {
        elements.toggleBtn.addEventListener('click', () => {
            const isVisible = elements.listWrapper.style.display === 'block';
            if (isVisible) {
                elements.listWrapper.style.display = 'none';
                elements.toggleBtn.textContent = '👁 Показать список';
            } else {
                elements.listWrapper.style.display = 'block';
                elements.toggleBtn.textContent = '🙈 Скрыть список';
                renderList();
            }
        });
    }

    // 2. Очистить список
    if (elements.clearBtn) {
        elements.clearBtn.addEventListener('click', () => {
            if (getRegistrations().length === 0) {
                alert('Список уже пуст.');
                return;
            }
            if (confirm('Вы уверены, что хотите ПОЛНОСТЬЮ очистить список? Это действие нельзя отменить.')) {
                saveRegistrations([]);
                renderList();
                alert('Список очищен.');
            }
        });
    }

    // 3. Редактирование, сохранение, отмена и УДАЛЕНИЕ (через делегирование)
    elements.registrationListDiv.addEventListener('click', (e) => {
        const target = e.target.closest('button'); // Ищем нажатую кнопку
        if (!target) return;

        const item = target.closest('.reg-item');
        if (!item) return;

        const index = Array.from(elements.registrationListDiv.children).indexOf(item);
        let registrations = getRegistrations();

        if (target.classList.contains('edit-btn')) {
            enableEditMode(item, index);
        } 
        else if (target.classList.contains('save-btn')) {
            const newName = item.querySelector('.edit-input').value.trim();
            const newGroup = item.querySelector('.edit-group-input').value.trim();
            if (newName && newGroup) {
                registrations[index].fullName = newName;
                registrations[index].groupNumber = newGroup;
                saveRegistrations(registrations);
                renderList();
            } else {
                alert('ФИО и номер группы не могут быть пустыми.');
            }
        } 
        else if (target.classList.contains('cancel-btn')) {
            renderList();
        } 
        // **ИЗМЕНЕНИЕ**: Логика для кнопки удаления
        else if (target.classList.contains('delete-btn')) {
            const studentName = registrations[index].fullName;
            if (confirm(`Вы уверены, что хотите удалить студента "${studentName}"?`)) {
                registrations.splice(index, 1); // Удаляем элемент из массива
                saveRegistrations(registrations); // Сохраняем обновленный массив
                renderList(); // Перерисовываем список
            }
        }
    });

    // 4. Регистрация нового студента
    if (elements.form) {
        elements.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = e.target.elements.fullName.value.trim();
            const groupNumber = e.target.elements.groupNumber.value.trim();

            if (!fullName || !groupNumber) {
                alert('Пожалуйста, заполните все поля.');
                return;
            }

            const randomIndex = Math.floor(Math.random() * tickets.length);
            const assignedTicket = tickets[randomIndex];
            
            elements.ticketResultDiv.style.display = 'block';
            elements.ticketResultDiv.innerHTML = `<h2>Ваш билет № ${assignedTicket.id}</h2><ul>${assignedTicket.questions.map((q, i) => `<li><strong>Вопрос ${i + 1}:</strong> ${q}</li>`).join('')}</ul>`;

            const registrations = getRegistrations();
            registrations.push({ fullName, groupNumber, ticket: assignedTicket });
            saveRegistrations(registrations);

            if (elements.listWrapper.style.display === 'block') {
                renderList();
            }

            e.target.reset();
        });
    }

    // 5. Скачивание CSV
    if (elements.downloadBtn) {
        elements.downloadBtn.addEventListener('click', () => {
            const registrations = getRegistrations();
            if (registrations.length === 0) {
                alert('Нет данных для скачивания.');
                return;
            }

            const headers = ["ФИО", "Номер группы", "Номер билета", "Вопрос 1", "Вопрос 2", "Вопрос 3"].join(';');
            const rows = registrations.map(reg => [reg.fullName, reg.groupNumber, reg.ticket.id, ...reg.ticket.questions].map(field => `"${String(field).replace(/"/g, '""')}"`).join(';'));
            const csvContent = '\uFEFF' + [headers, ...rows].join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "list.csv";
            link.click();
            URL.revokeObjectURL(link.href);
        });
    }
});

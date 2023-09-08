 function updateDateTime() {
            const currentDate = new Date();
            const currentUTC = currentDate.getUTCHours();
            const minuteUTC = currentDate.getUTCMinutes();
            const seconedUTC = currentDate.getUTCMilliseconds();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDayIndex = currentDate.getUTCDay();
            const currentDayOfTheWeek = daysOfWeek[currentDayIndex];

            // Update the content of elements with specific IDs
            document.getElementById('currenttime').textContent = currentUTC;
            document.getElementById('currentday').textContent = currentDayOfTheWeek;
            document.getElementById('seconedUTC').textContent = seconedUTC;
            document.getElementById('minuteUTC').textContent = minuteUTC;
        }

        // Call the function to update the elements when the page loads
        window.onload = updateDateTime;
    

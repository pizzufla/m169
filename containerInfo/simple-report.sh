today=$(date +%Y-%m-%d)
echo ---------------------
echo Report "$today"
echo ---------------------
echo Hostname
echo $(hostname)
echo ---------------------
echo OS und Maschine:
echo $(uname -s -r -m)
echo ---------------------
echo Netzwerk
echo $(ifconfig eth0 | grep inet)
echo ---------------------
echo 

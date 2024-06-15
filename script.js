const cek=document.getElementById('cek');
		cek.addEventListener('click', function(){
			const namaAnda=document.getElementById('namaAnda').value;
			const namaPasangan=document.getElementById('namaPasangan').value;
			const hasil=document.getElementById('hasil');
			if(namaAnda =="" || namaPasangan==""){
				hasil.innerHTML="<b>Maaf ya, nama anda dan nama pasangan anda tidak boleh kosong!";
			}else{
				const angka1=namaAnda.length;
				const angka2=namaPasangan.length;
				if(angka1 > angka2){
					var persen=Math.ceil((angka2*100)/angka1);
					
				}else{
					var persen=Math.ceil((angka1*100)/angka2);
				}

				if(persen < 30){
					var ket='tidak serasi';
				}else if(persen < 60 ){
					var ket='kurang serasi';
				}else if(persen < 80){
					var ket='kurang serasi, tapi bisa diusahakan';
				}else if(persen < 90){
					var ket='serasi';
				}else{
					var ket='Sangat serasi';
				}
				
				hasil.innerHTML='Anda <i>(' + namaAnda + ')</i> dengan pasangan anda <i>('+ namaPasangan +')</i> <b>' + ket + '</b> dengan keserasian <i>' + persen + '%</i>';
			}
		})
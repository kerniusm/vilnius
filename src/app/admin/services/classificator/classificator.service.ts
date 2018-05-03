import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// truputi patvarkyt interface extentdint id
import { ClassificatorData } from './classificator';

@Injectable()
export class ClassificatorService {
  private classificatorsCollection: AngularFirestoreCollection<ClassificatorData>;
  classificators: Observable<any[]>;
  constructor(
    private afs: AngularFirestore) {
    this.classificatorsCollection = afs.collection<any>('classificator');
    this.classificators = this.classificatorsCollection.snapshotChanges().map(
      classificators => {
        return classificators.map( cl => {
         const id = cl.payload.doc.id;
         const data = cl.payload.doc.data();
         return { id, ...data };
        }
        );
      }
    );
  }

  showClassificators() {
    return this.classificators;
  }
//  ClassificatorData interface edit !!! extend id
  addClassificator(classificator) {
    this.classificatorsCollection.add(classificator);
  }

  editClassificator(id, data) {
 return    this.afs.doc<any>('classificator/' + id).update(data)
  }

}
